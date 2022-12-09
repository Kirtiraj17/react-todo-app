import React from 'react'

function AddTaskModal() {
  return (
    <div className="modal-wrapper">
      <div className="add-task-modal">
        <div className="cross-btn">X</div>
        <form action="">
          <h2>Add TODO</h2>
          <div className="title-div">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" className="title" />
          </div>
          <div className="status-div">
            <label htmlFor="status">Status</label>
            <select className="status" id="status">
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div className="modal-buttons">
            <button className="add-task">Add Task</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTaskModal;
