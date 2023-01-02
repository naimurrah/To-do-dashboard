import { useState } from "react";
import EditTodoModal from "./EditTodoModal";
function TodoItem({ item, tags, deleteTodo, submitTodo, editTodo }) {
    // implement state functions later on
    const [done, setDone] = useState(item.isDone);
    // maybe pass tags as prop
    const [description, setDes] = useState(item.description);
    // use callback for delete/add/mark as done
    return (
        <>
            <tr key={item.id} className={done ? "table-success" : ""}>
                <td><button type="button" className="btn btn-primary" onClick={
                    () => {
                        submitTodo(item);
                        item.isDone = !item.isDone;
                        setDone(prev => !prev);
                    }}>
                    Done</button></td>
                <td>
                    <p>{description}</p>
                    <a href="#index" className="badge rounded-pill text-bg-secondary">{tags[item.tag]}</a>
                </td>
                <td>{item.date}</td>
                <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#todoModal" onClick={() => { console.log(description) }}>Edit</button>
                <EditTodoModal item={item} description={description} setDes={setDes} />
                </td>
                <td><button type="button" className="btn btn-danger" onClick={() => { deleteTodo(item.id) }}>Delete</button></td>
                
            </tr>
        </>
    )
}

export default TodoItem;