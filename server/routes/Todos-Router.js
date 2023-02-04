const router = require("express").Router();

let Todo = require("../models/todo-model.js");

router.route("/").get(async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error.message);
    }
});

router.route("/").post(async (req, res) => {
    try {
        const {date, isDone, description, tag, hasDue} = req.body;
        const todo = new Todo({
            description:description,
            date:new Date(date),
            isDone:isDone,
            tag:tag,
            hasDue:hasDue
        })

        await todo.save();
    
        res.json(todo);
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = router;