const joi = require('joi')

const userSchema= joi.object({
    username: joi.string().alphanum().min(3).max(10).required(),
    password: joi.string().min(3).max(20).required()
})

function validateUser(user){
    return userSchema.validate(user)
}

module.exports=validateUser