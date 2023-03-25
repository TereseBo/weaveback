const fs = require('fs')
//TODO: Add validation of body
//TODO: Add middleware to check if file exists

function returnWeave(req, res) {

    const fileName = req.body.fileName
    const data = JSON.stringify(req.body.weave)
    const path = process.env.DATA_PATH + fileName + '.json'

    fs.writeFile(path, data, (err) => {
        if (err) {
            res.status(500).send('Ooops, something went wrong')
        }
        else {
            res.status(200).download(path)
        }
    })

   

/*     fs.readFile(path, 'utf8', (err) => {
        if (err) {
            res.status(500).send('Error retrieving file')
        }
        else {
            res.status(200).download(path)
        }
    }) */

}

module.exports = returnWeave