const express=require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app=express()


const PORT=process.env.PORT || 8080

app.get('/',(req,res)=>{
    console.log('testing gitlab')
    res.send('testing gitlab')
})
app.get('/2',(req,res)=>{
    console.log('testing gitlab2')
    res.send('testing gitlab2')
})
app.get('/3',(req,res)=>{
    console.log('testing gitlab3')
    res.send('testing gitlab3')
})


app.listen(PORT,()=>{
    console.log('server is up and running on port : '+PORT) 
})