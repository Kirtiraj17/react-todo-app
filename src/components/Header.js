import React from "react";
import AddTaskButton from "./AddTaskButton";

function Header({ onClick, setSelect }) {
  const handleSelect = () => {
    let selectValue = document.querySelector(".select-task").value;
    setSelect(selectValue);
  };

  return (
    <div className="header">
      <AddTaskButton onClick={onClick} />
      <select className="select-task" onChange={handleSelect}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  );
}

export default Header;
