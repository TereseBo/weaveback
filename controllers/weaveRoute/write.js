const fs = require('fs')
//TODO: Add validation of body
//TODO: Add middleware to check if file exists

function write(req, res) {
    const fileName = req.body.fileName
    const data = JSON.stringify(req.body.weave)
    const path = process.env.DATA_PATH + fileName + '.json'

    fs.writeFile(path, data, (err) => {
        if (err) {
            res.status(500).send('Error writing file')
        }
        else {
            res.status(200).send('File written')
        }
    })

}

module.exports = write