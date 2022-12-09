import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTaskModal from './components/AddTaskModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
    // console.log(isModalOpen);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>TODO LIST</h1>
        <Header onClick={openModal} />
        <Todos />
        {/* <AddTaskModal /> */}
        {isModalOpen && <AddTaskModal onClick={openModal} />}
      </div>
    </div>
  );
}

export default App;
