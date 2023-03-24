const express=require('express')
const weaveRoute=express.Router()

//functions
const write=require('../controllers/weaveRoute/write')


weaveRoute.get('/',(req,res)=>{//Return all drafts?
    res.send('Weave Route')
})
weaveRoute.post('/',write) //save draft to json-file

module.exports=weaveRoute