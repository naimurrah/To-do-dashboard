import TodoItem from "./TodoItem";


function TodoTable() {

    const todos = [
        {
            id:1,
            description:"Calc Homework",
            tag:1,
            hasDue:false,
            date: ""
        },
        {
            id:2,
            description:"Spanish Homework",
            tag:3,
            hasDue:true,
            date: "10/10/2022"
        },
        {
            id:3,
            description:"Wash Laundry",
            tag:2,
            hasDue:true,
            date: "10/10/2022"
        },
        {
            id:4,
            description:"Sleep",
            tag:2,
            hasDue:false,
            date: ""
        },
    ];

    const tags = {
        1:"School",
        2:"Test",
        3:"Exam",
        4:"Homework",
    };

    function deleteTodo (tid) {
        console.log("Deleted "+ tid);
    }

    function submitTodo (tid) {
        console.log("Submitted "+ tid);
    }
    function editTodo (tid) {
        console.log("Edited "+ tid);
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => {
                        return (
                            <TodoItem key={todo.id} item={todo} editTodo={editTodo} submitTodo={submitTodo} deleteTodo={deleteTodo} tags={tags}></TodoItem>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TodoTable;