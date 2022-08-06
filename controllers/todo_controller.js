//require todoSchema for CRUD operations
const Todo=require('../models/todo');

module.exports.home=function(req,res){
    return res.json({"message":"Home of todo list"});
}
//list all the todol List
module.exports.list=function(req,res){
    Todo.find().exec((err,todos)=>{
      if(err){
        return res.json({ error:err });
      }else{
        return res.json( {data:todos});
      }
    });
}

//create all the todo list
module.exports.createList=function(req,res){
    console.log(req.body);
    const todo=Todo({
    title:req.body.title,
    content:req.body.content,
    });
    todo.save((err,todo)=>{
        if(err){
            return res.json({ error:err });
        }else{
            return res.json( { data:todo });
        }
    });
};

//create all the todo list
module.exports.editList=function(req,res){
    //trying to find the task if it is there then only we can update the task
    Todo.findById(req.params.id).exec((err,todo)=>{
        if(err){
            return res.json({ error:err }); 
        }
    //if no error is found 
    //setting the data
    //if no data provided use default data
    todo.title=req.body.title??todo.title;
    todo.content=req.body.content??todo.content;
    todo.completed=req.body.completed ??todo.completed;
    //saving the updated data
    todo.save((err,todo)=>{
        if(err){
            return res.json({ error:err }); 
        }else{
            return res.json({ data :todo});  
        }
    });
    });
};

//create all the todo list
module.exports.deleteList=function(req,res){
//finding element by id
    Todo.remove({
    _id:req.params.id
    }).exec((err,todo)=>{
    if(err){
        return res.json({ error:err }); 
    }
    //if already deleted then
    if(todo.deletedCount==0){
        return res.json({ Data:"No such todo is avaliable"}); 
    }
    //show the deleted task's information
        return res.json({ Data :todo});
    
    });
};
