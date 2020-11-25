const express=require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app=express()


const PORT=process.env.PORT || 8080

app.get('/',(req,res)=>{
    console.log('testing github')
    res.send('testing github')
})
app.get('/2',(req,res)=>{
    console.log('testing github2')
    res.send('testing github2')
})
app.get('/3',(req,res)=>{
    console.log('testing github3')
    res.send('testing github3')
})

app.get('/4',(req,res)=>{
    console.log('testing github4  app')
    res.send('testing github4  app')
})


app.listen(PORT,()=>{
    console.log('server is up and running on port : '+PORT) 
})