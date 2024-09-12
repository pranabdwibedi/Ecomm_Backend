//POST localhost:8888/ecomm/api/v1/auth/signup
//I need to intercept this
import authController from '../controllers/auth.controller.js'
import loginController from '../controllers/login.controller.js'
import authMW from "../middleware/auth.mw.js"
import loginMW from '../middleware/login.mw.js'
const authRouter = (app)=>{
    app.post('/ecomm/api/v1/auth/signup',[authMW], authController);
    app.post('/ecomm/api/v1/auth/login', [loginMW],loginController)
}
export default authRouter