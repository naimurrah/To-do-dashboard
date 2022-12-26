function TodoItem({item, tags, deleteTodo, submitTodo, editTodo}) {
    // implement state functions later on

    // maybe pass tags as prop
    
    
    // use callback for delete/add/mark as done
    return (
        <tr key={item.id} className= {item.isDone ? "table-success" : ""}>
            <td><button type="button" className="btn btn-primary" onClick={() => {submitTodo(item)}}>Done</button></td>
            <td>
                <p>{item.description}</p>
                <a href="#index" className="badge rounded-pill text-bg-secondary">{tags[item.tag]}</a>
            </td>
            <td>{item.date}</td>
            <td><button type="button" className="btn btn-primary" onClick={() => {editTodo(item)}}>Edit</button></td>
            <td><button type="button" className="btn btn-danger" onClick={() => {deleteTodo(item.id)}}>Delete</button></td>
        </tr>
    )
}

export default TodoItem;