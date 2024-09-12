import userModel from '../models/user.model.js'
const validateSignupBody = async (req,res,next)=>{
    try{
        if(!req.body.name){
            return res.status(400).send({
                message : "Failed ! name is required"
            })
        }
        if(!req.body.userId){
            return res.status(400).send({
                message : "Failed ! userId is required"
            })
        }
        if(!req.body.email){
            return res.status(400).send({
                message : "Failed ! email is required"
            })
        }
        if(!req.body.password){
            return res.status(400).send({
                message : "Failed ! password is required"
            })
        }
        let user = await userModel.findOne({userId : req.body.userId});
        if(user){
            return res.status(400).send({
                message : "Failed ! User Id is already present"
            })
        }
        user = await userModel.findOne({email: req.body.email})
        if(user){
            return res.status(400).send({
                message : "Failed ! emai Id is already present"
            })
        }
        next();
    }catch(err){
        console.log("Error While validating Object",err);
        res.status(500).send({
            message : "Error While validating the user Object"
        })
    }
}
export default validateSignupBody;