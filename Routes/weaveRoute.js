const express=require('express')
const weaveRoute=express.Router()

//functions
const saveWeave=require('../controllers/weaveRoute/saveWeave')
const returnWeave=require('../controllers/weaveRoute/returnWeave')

weaveRoute.get('/',(req,res)=>{//Return all drafts?
    res.send('Weave Route')
})
weaveRoute.post('/save',saveWeave) //save draft to json-file
weaveRoute.post('/download',returnWeave) //save draft to json-file

module.exports=weaveRoute