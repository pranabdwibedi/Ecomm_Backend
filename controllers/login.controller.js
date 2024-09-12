import userModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import secrets from '../configs/auth.config.js'
const signin = async(req,res) =>{
    //check the user ID is resent or not
    const user = await userModel.findOne({userId : req.body.userId});
    if(user == null){
        return res.status(400).send({
            message : "user ID is not valid"
        })
    }
    //password is correct or not
    const isPasswordValid = bcrypt.compareSync(req.body.password,user.password);
    if(!isPasswordValid){
        return res.status(400).send({
            message : "Wrong password entered"
        })
    }
    //generate JWT token with a TTL and return
    const token = jwt.sign({id : user.userId},secrets.SECRET,{expiresIn : 120});
    res.status(200).send({
        name : user.name,
        userId : user.userId,
        email : user.email,
        userType : user.userType,
        accessToken : token
    })
}
export default signin;