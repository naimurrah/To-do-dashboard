import { useState } from "react";
function TodoItem({ item, tags, deleteTodo, submitTodo, editTodo }) {
    // implement state functions later on
    const [done, setDone] = useState(item.isDone);
    // maybe pass tags as prop


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
                    <p>{item.description}</p>
                    <a href="#index" className="badge rounded-pill text-bg-secondary">{tags[item.tag]}</a>
                </td>
                <td>{item.date}</td>
                <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#todoModal" onClick={() => { editTodo(item) }}>Edit</button></td>
                <td><button type="button" className="btn btn-danger" onClick={() => { deleteTodo(item.id) }}>Delete</button></td>
            </tr>
        </>
    )
}

export default TodoItem;