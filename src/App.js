import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>TODO LIST</h1>
        <Header />
        <Todos />
      </div>
    </div>
  );
}

export default App;
