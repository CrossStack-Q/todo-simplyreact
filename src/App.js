import React, { useState } from 'react';
import "./App.css"

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { task: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className='main' >
      <div>
        <div className='headr'>
          <p className='title'>
            My To Do List
          </p>
          <form
            onSubmit={handleSubmit}>
            <input
              className='inout'
              type="text"
              placeholder="Title..."
              value={newTodo}
              onChange={handleChange}
            />
            <button className='buttonsubmit' type="submit">Add</button>
          </form>
        </div>

        <ul className='todolist'>
          {todos.map((todo, index) => (
            <li key={index} className="todoitem">
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "",
                  fontSize: "24px",
                }}
                onClick={() => handleCompleted(index)}
              >
                {todo.task}
              </span>
              <span style={{
                fontSize: "24px",
                cursor: "pointer",
              }} onClick={() => handleDelete(index)}>&times;</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
