import { useState } from 'react';

export default function TodoForm({ addTask }) {
  const [value, setValue] = useState('');
  function submitHandler(e) {
    e.preventDefault();
    addTask(value);
    setValue('');
  }
  return (
    <>
      <form className="TodoForm">
        <input
          type="text"
          placeholder="Enter Task"
          className="todo-input"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          type="submit"
          className="todo-btn"
          onClick={(e) => submitHandler(e)}
        >
          Add Task
        </button>
      </form>
    </>
  );
}
