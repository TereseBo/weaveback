const express=require('express')
require('dotenv').config()
console.log(process.env.PORT) 
const server=express()

const weaveRoute=require('./routes/weaveRoute')
const usersRoute=require('./routes/usersRoute')

server.use(express.json())

server.use('/weave',weaveRoute)
server.use('/users',usersRoute)

module.exports=server
