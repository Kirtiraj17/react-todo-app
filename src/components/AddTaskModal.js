import React, { useState, useEffect, useRef } from "react";

function AddTaskModal({ onClick, isModalOpen, setAllTodos, todo, setTodo, editIndex, setEditIndex }) {
  const [error, setError] = useState({});

  const ref = useRef(null);
  const titleRef = useRef();

  // Close add-task popup on outside click of popup
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    // Clean-up function
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  // Validate Form
  const validateForm = () => {
    // if (todo.title.length === 0) {
    //   titleRef.current.focus();
    //   return false;
    // }
    // onClick();
    // return true;
    let error = {};
    if (todo.title.length === 0) {
      error.title = "Title should not be empty!";
    }
    return error;
  };
  // console.log(validateForm());

  // Handle Form submit
  const submitHandler = (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (Object.keys(valid).length === 0) {
      if(editIndex || editIndex === 0) {
        setAllTodos((allTodos)=>[...allTodos.filter((_, i) => i !== editIndex),todo]);
        setError({});
        onClick();
        setTodo({ title: "", status: "incomplete" });
        setEditIndex(null);
      } else {
        setAllTodos((prevAllTodo) => [...prevAllTodo, todo]);
        setError({});
        onClick();
        setTodo({ title: "", status: "incomplete" });
      }
    } else {
      setError(valid);
    }
  };

  return (
    <div className="modal-wrapper">
      <div ref={ref} className="add-task-modal">
        <div className="cross-btn" onClick={onClick}>
          X
        </div>
        <form onSubmit={submitHandler}>
          <h2>Add TODO</h2>
          <div className="title-div">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={todo.title}
              className="title"
              onChange={(event) =>
                setTodo({ ...todo, title: event.target.value })
              }
              ref={titleRef}
            />
            <span>{error.title}</span>
          </div>
          <div className="status-div">
            <label htmlFor="status">Status</label>
            <select
              className="status"
              id="status"
              value={todo.status}
              onChange={(event) =>
                setTodo({ ...todo, status: event.target.value })
              }
            >
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div className="modal-buttons">
            <input type="submit" className="add-task" value="Add Task" />
            <input
              type="cancel"
              className="cancel-btn"
              value="Cancel"
              onClick={onClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
