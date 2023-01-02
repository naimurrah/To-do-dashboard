import React, {useState} from 'react'

function EditTodoModal({idName, item, description, setDes}) {
  const [oDesc, setODesc] = useState(description);
  
  return (
      <div className="modal fade" id="todoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Todo</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" 
              onClick={
              () => {
                setODesc(description);
              }}></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" value={oDesc} onChange={e => (setODesc(e.target.value))} 
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  item.description = oDesc;
                  setDes(oDesc);
                }
              }}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" 
              onClick={() => {
                setODesc(description);
              }}
              >Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" 
              onClick={
                () => {
                  item.description = oDesc;
                  setDes(oDesc);
                }}
                >
                Save changes
                </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EditTodoModal