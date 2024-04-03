const express=require("express")
require("dotenv").config()
const cors=require("cors")
const UserRoutes = require("./routes/user")
const bugroutes = require("./routes/bugs")
const Connect = require("./db")

const app=express()
app.use(express.json())
app.use(cors())
app.use("/api",UserRoutes)
app.use("/api",bugroutes)
app.listen(process.env.Port,async()=>{
    try {
       await Connect
       console.log(`Server is running on port ${process.env.Port}`)
    } catch (error) {
        console.log(error)
    }
})