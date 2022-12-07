import React from "react";
import AddTaskButton from './AddTaskButton';

function Header() {

  return (
    <div className="header">
      {/* <button className="add-task">Add Task</button> */}
      <AddTaskButton />
      <select className="select-task">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  )
}

export default Header;
