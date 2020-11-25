const express=require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app=express()


const PORT=process.env.PORT || 8080

app.get('/',(req,res)=>{
    console.log('testing github')
    res.send('testing github , only one route /')
})



app.listen(PORT,()=>{
    console.log('server is up and running on port : '+PORT) 
})