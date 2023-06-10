const validateUser = require('../validation/user')
const validationError = require('../validation/validationError')

function login(req,res){
    const validatedUser = validateUser(req.body.user)

    if (validatedUser.error) {
        validationError(res, validatedUser.error)
        return
    }

    res.send('login')

}

module.exports=login