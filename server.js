const express=require('express')
require('dotenv').config()
console.log(process.env.PORT) 
const server=express()

const weaveRoute=require('./routes/weaveRoute')

server.use(express.json())

server.use('/weave',weaveRoute)

exports.server=server
