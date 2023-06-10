const express=require('express')
const usersRoute=express.Router()

//functions
const register=require('../controllers/usersRoute/register')
const login=require('../controllers/usersRoute/login')

usersRoute.get('/',(req,res)=>{//Return msg
    res.send('Users Route')
})
usersRoute.post('/register',register) //add user
usersRoute.post('/login',login) //login user

module.exports=usersRoute