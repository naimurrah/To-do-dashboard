function TodoItem(props) {
    // implement state functions later on

    // maybe pass tags as prop
    const tags = {
        1:"School",
        2:"Test",
        3:"Exam",
        4:"Homework",
    };
    
    // use callback for delete/add/mark as done
    return (
        <tr key={props.item.id}>
            <td><button type="button" className="btn btn-primary">Done</button></td>
            <td>
                <p>{props.item.description}</p>
                <a href="#index" className="badge rounded-pill text-bg-secondary">{tags[props.item.tag]}</a>
            </td>
            <td>{props.item.date}</td>
            <td><button type="button" className="btn btn-primary">Edit</button></td>
            <td><button type="button" className="btn btn-danger" onClick={() => {console.log("testing")}}>Delete</button></td>
        </tr>
    )
}

export default TodoItem;