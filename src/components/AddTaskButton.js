import React, { useState } from 'react';

function AddTaskButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(prevIsModalOpen => !isModalOpen);
    console.log(isModalOpen);
  }

  return (
    <div>
      <button 
        className="add-task"
        onClick={ openModal/* () => { setIsModalOpen(prevIsModalOpen => !isModalOpen) } */ }
      >
        Add Task
      </button>
    </div>
  )
}

export default AddTaskButton;
