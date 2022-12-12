import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTaskModal from "./components/AddTaskModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  console.log(allTodos);

  const [todo, setTodo] = useState({
    title: "",
    status: "incomplete",
  });
  // console.log(todo)

  const openModal = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
    // console.log(isModalOpen);
  };

  const handleDelete = (index) => {
    setAllTodos(allTodos.filter((_, i) => i !== index));
    // console.log("delete");
  };

  const handleEdit = (index) => {
    openModal();
    setTodo(allTodos[index]);
    console.log("edit", allTodos[index]);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1>TODO LIST</h1>
        <Header onClick={openModal} />
        <Todos
          allTodos={allTodos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        {isModalOpen && (
          <AddTaskModal
            isModalOpen={isModalOpen}
            onClick={openModal}
            setAllTodos={setAllTodos}
            todo={todo}
            setTodo={setTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
