//POST localhost:8888/ecomm/api/v1/auth/signup
//I need to intercept this
import authController from '../controllers/auth.controller.js'
const authRouter = (app)=>{
    app.post('/ecomm/api/v1/auth/signup', authController);
}

export default authRouter