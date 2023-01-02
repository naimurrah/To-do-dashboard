import React, { useState } from 'react'

export default function AddTodoModal({addTodo, idNum}) {
    const [newDesc, setNewDesc] = useState("");
    let newTD = {
        id:idNum,
        description:"New Todo",
        tag:3,
        hasDue:false,
        date: "",
        isDone: false,
    };

    return (
        <div className="modal fade" id="addTodoModal" tabIndex="-1" aria-labelledby="addTodoModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addTodoModalLabel">Create New Todo</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className='form-control' value={newDesc} placeholder="Enter Todo Description"  
                        onChange={(e) => setNewDesc(e.target.value)} 
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" 
                        onClick={() => {
                            newTD.description = newDesc;
                            addTodo(newTD);
                        }}
                        >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
