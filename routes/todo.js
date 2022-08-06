const express=require('express');
const router=express.Router();

const todoController=require('../controllers/todo_controller');

router.get('/list',todoController.list);
router.post('/create-list',todoController.createList);
router.put('/edit-list/:id',todoController.editList);
router.delete('/delete-list/:id',todoController.deleteList);


module.exports=router;