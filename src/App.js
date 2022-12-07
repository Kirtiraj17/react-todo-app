import React from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTaskModal from './components/AddTaskModal';

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <h1>TODO LIST</h1>
        <Header />
        <Todos />
        <AddTaskModal />
        {/* {isModalOpen && <AddTaskModal />} */}
      </div>
    </div>
  );
}

export default App;
