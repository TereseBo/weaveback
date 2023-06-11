//Adds user with hashed password and unique username to users collection
const bcrypt = require('bcrypt')

const db = require('../../database/database')

const validateUser = require('../validation/user')
const validationError = require('../validation/validationError')

function register(req, res) {
    const validated = validateUser(req.body.user)

    if (validated.error) {
        validationError(res, validated.error)
        return
    }
    const { username, password } = validated.value
    const hashedPass = bcrypt.hashSync(password, 10)
    const newUser = {
        username,
        hashedPass
    }
    console.log(newUser)

    db.users.insertOne(newUser)
    .then(function(result){
        console.log(result)
        res.status(201).send('User has been crated')
    })
    .catch(function(error){
        console.log(error)
        if(error.code===11000){
        res.status(401).send('Ooops, that username is taken')
        return
        }
        res.status(401).send('Ooops, something went wrong')
    })
}

module.exports = register