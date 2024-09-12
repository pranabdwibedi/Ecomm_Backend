import bcrypt from 'bcryptjs'
import userModel from '../models/user.model.js'
const signUp = async(req,res)=>{
    //logic to create the object
    //1. read the request body
    const requestBody = req.body
    //2. insert the data in the users collection in mongoDB
    const userObj = {
        name : requestBody.name,
        userId : requestBody.userId,
        password : bcrypt.hashSync(requestBody.password,8),
        email : requestBody.email
    }
    try{
        const userCreated = await userModel.create(userObj)
        //return this user

        const resUser = {
            name : userCreated.name,
            userId : userCreated.userId,
            email : userCreated.email
        }
        res.status(201).send(resUser)
    }catch(err){
        console.log("Error while registering the user", err)
        res.status(500).send({
            message : "Some error occured while registering the user"
        })
    }
    //3. return the response back to the user
}
export default signUp;