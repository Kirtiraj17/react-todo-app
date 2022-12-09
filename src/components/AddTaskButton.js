import React, { useState } from 'react';

function AddTaskButton({onClick}) {
  // const openModal = () => {
  //   setIsModalOpen(prevIsModalOpen => !isModalOpen);
  //   console.log(isModalOpen);
  // }

  return (
    <div>
      <button 
        className="add-task"
        onClick={ onClick }
      >
        Add Task
      </button>
    </div>
  )
}

export default AddTaskButton;
