import { useState } from 'react';

export default function EditTodoForm({ task, editTask }) {
  const [value, setValue] = useState(task.task);
  function submitHandler(e) {
    e.preventDefault();
    editTask(task.id, value);
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
          Edit Task
        </button>
      </form>
    </>
  );
}
