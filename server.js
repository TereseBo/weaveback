const express=require('express')
require('dotenv').config()
console.log(process.env.PORT) 
const server=express()

const weaveRoute=require('./routes/weaveRoute')

server.use(express.json())

server.use('/weave',weaveRoute)

server.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})