const mongoose= require('mongoose')

const connectDB=async()=>{
    // console.log(process.env.MANGO_URI)
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log(`MangoDB connected: ${conn.connection.host}`.cyan.underline)

    }catch(error){
        console.log(error)
        process.exit(1)

    }
}


module.exports= connectDB