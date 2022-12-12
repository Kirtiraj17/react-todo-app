import React from "react";
import AddTaskButton from "./AddTaskButton";

function Header({ onClick }) {
  // const openModal = () => {
  //   setIsModalOpen(isModalOpen => !isModalOpen);
  //   // console.log(isModalOpen);
  // }

  return (
    <div className="header">
      {/* <button className="add-task">Add Task</button> */}
      <AddTaskButton onClick={onClick} />
      <select className="select-task">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  );
}

export default Header;
