import React, { useState }from 'react';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function handleNewTodoChange(e) {
    e.preventDefault();
    setNewTodo(e.target.value);
  };
  function handleNewTodo(e) {
    e.preventDefault();
    console.log(newTodo);
  }

  return (
    <div className="demo-component">
      <h1>Todos</h1>
      <form onSubmit={handleNewTodo}>
        <input placeholder="Your todo..." onChange={handleNewTodoChange} />
        <ul>
          <li>Buy Milk</li>
          <li>Buy Cheese</li>
        </ul>
      </form>
    </div>
  );
};

export default App;
