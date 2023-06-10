const validateUser = require('../validation/user')
const validationError = require('../validation/validationError')

function register(req, res) {
    const validatedUser = validateUser(req.body.user)

    if (validatedUser.error) {
        validationError(res, validatedUser.error)
        return
    }

    res.send('register')


}

module.exports = register