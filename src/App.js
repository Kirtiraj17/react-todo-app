import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTaskModal from "./components/AddTaskModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  // console.log(allTodos);

  const [todo, setTodo] = useState({
    title: "",
    status: "incomplete",
  });

  const [select, setSelect] = useState("all");
  const [editIndex, setEditIndex] = useState();

  const openModal = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
    setTodo({ title: "", status: "incomplete" });
  };

  const handleDelete = (index) => {
    setAllTodos(allTodos.filter((_, i) => i !== index));
  };

  const handleEdit = (editIndex) => {
    openModal();
    setTodo(allTodos[editIndex]);
    setEditIndex(editIndex);
    // console.log("edit", allTodos[editIndex]);
  };

  const handleCheck = (index) => {
    console.log("checked", index);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1>TODO LIST</h1>
        <Header onClick={openModal} setSelect={setSelect} />
        <Todos
          allTodos={allTodos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          select={select}
          handleCheck={handleCheck}
        />
        {isModalOpen && (
          <AddTaskModal
            isModalOpen={isModalOpen}
            onClick={openModal}
            setAllTodos={setAllTodos}
            todo={todo}
            setTodo={setTodo}
            editIndex={editIndex}
          />
        )}
      </div>
    </div>
  );
}

export default App;
