function validationError(res, error){
    return res.status(400).send(error.details[0].message)
    
}

module.exports=validationError