import express from 'express'
import mongoose from 'mongoose'
import serverConfig from './configs/server.config.js'
import dbConfig from './configs/db.config.js'
import userModel from "./models/user.model.js"
import bcrypt from "bcryptjs"

//start the server
const app = express()

//create an admin user at the starting of the application (if not present already)
mongoose.connect(dbConfig.DB_URL)
const db = mongoose.connection

db.on("error",()=>{ 
    console.log("Error while connecting to the database")
})

db.on("open", ()=>{
    console.log("Connected to database")
    init()
})

let init = async()=>{
    let user
    try{
        user = await userModel.findOne({userType : "ADMIN"})
    }catch(err){
        console.log("Error while reading data from database",err)
    }
    if(user){
        console.log("Admin is already present", user)
        return
    }
    else{
        try{
            user = {
                name : "Pranab Kumar Dwibedi",
                userId : "pranab",
                password : bcrypt.hashSync("pranab@BCET",8),
                email : "kumarpranab870@gmail.com",
                userType : "ADMIN"
            }
            userModel.create(user)
            console.log("Admin Created", user)
        }catch(err){
            console.log("Error while creating Admin : ", err)
        }
    }
}

app.listen(serverConfig.PORT,()=>{
    console.log("Server Started at port : ",serverConfig.PORT)
})