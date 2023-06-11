//Compares username and hashed pass with collection
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const db = require('../../database/database')

const validateUser = require('../validation/user')
const validationError = require('../validation/validationError')
const createCookie = require('../functions/createCookie')

function login(req, res) {
    const validated = validateUser(req.body.user)

    if (validated.error) {
        validationError(res, validated.error)
        return
    }
    const { username, password } = validated.value


    db.users.findOne({ username })
        .then(function (result) {

            if (result !== null && bcrypt.compareSync(password, result.hashedPass)) {
                console.log(result)
                createCookie(res, result)
                console.log(res)
                res.status(200).send('Here, have a cookie')
                return
            }
            res.status(400).send('Wrong username or password')
            return
        
        })
        .catch(function (error) {
            console.log(error)
            res.status(401).send('Ooops, something went wrong')
        })

}

module.exports = login