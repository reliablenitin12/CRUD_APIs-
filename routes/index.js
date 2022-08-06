const express=require('express');
const router=express.Router();

const todoController=require('../controllers/todo_controller');


router.get('/',todoController.home);

router.use('/todo',require('./todo'));

router.use('/user',require('./user'));



module.exports=router;