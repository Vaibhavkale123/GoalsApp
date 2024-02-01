const express = require('express');
const dotenv= require('dotenv').config();//it will create dotenv where all variable is there
const {errorHandler}=require('./middleware/errorMiddleware')
const port=process.env.PORT || 5000;
const colors= require('colors')
const connectDB=require('./config/db')


connectDB();
    
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
// app.get('/api/goals',(req,res)=>{
//     res.status(200).json({message:'getting goals'})
// })
// console.log(port)
 
app.use(errorHandler);
 app.listen(port,() =>console.log(`server is started on ${port}`));
      