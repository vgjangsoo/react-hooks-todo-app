import React, { useState }from 'react';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('');

  return (
    <div className="demo-component">
      <h1>Todos</h1>
      <form>
        <input placeholder="Your todo..."/>
        <ul>
          <li>Buy Milk</li>
          <li>Buy Cheese</li>
        </ul>
      </form>
    </div>
  );
}

export default App;
