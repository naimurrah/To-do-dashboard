const router = require("express").Router();

let Todo = require("../models/todo-model.js");

router.route("/").get(async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
    }
});

router.route("/").post(async (req, res) => {
    try {
        const todo = new Todo({description:"Test TOdo",
            date: new Date("2022-10-10"),
            hasDue:true,
            isDone:false,
            tag: 1
        });
    
        await todo.save();
    
        res.json(todo);
    } catch (error) {
        
    }
})

module.exports = router;