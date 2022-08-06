const express=require('express');
const router=express.Router();

const userController=require('../controllers/users_controller');
const userLoginApi=require('../controllers/users_login_api');


router.get('/profile',userController.profile);

router.get('/sign-up',userController.signup);

router.post('/create',userController.create);

router.post('/create-session',userLoginApi.createSession);

module.exports=router;