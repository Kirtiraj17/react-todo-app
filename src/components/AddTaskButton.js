import React from "react";

function AddTaskButton({ onClick }) {
  return (
    <div>
      <button className="add-task" onClick={onClick}>
        Add Task
      </button>
    </div>
  );
}

export default AddTaskButton;
