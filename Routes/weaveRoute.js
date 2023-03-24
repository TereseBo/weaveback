const express=require('express')
const weaveRoute=express.Router()

weaveRoute.get('/',(req,res)=>{
    res.send('Weave Route')
})
weaveRoute.post('/',(req,res)=>{
    res.send('Weave Route')
})

module.exports=weaveRoute