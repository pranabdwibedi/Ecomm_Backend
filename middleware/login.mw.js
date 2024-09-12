const loginMW = (req,res,next) =>{
    try{
        if(!req.body.userId){
            return res.status(400).send({
                message : "The user ID is missing"
            })
        }
        if(!req.body.password){
            return res.status(400).send({
                message : "The password is missing"
            })
        }
    }catch(err){
        res.status(500).send({
            message : "Error while validating the user details"
        })
    }
}
export default loginMW;