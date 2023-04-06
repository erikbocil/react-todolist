import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { useState } from 'react';

export default function TodoWrapper() {
  const [tasks, setTasks] = useState([]);
  const addTask = (todo) => {
    setTasks([
      ...tasks,
      {
        id: new Date().valueOf(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  function deleteTodo(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function setEditTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  }
  function editTask(id, todo) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, task: todo, isEditing: !task.isEditing }
          : task
      )
    );
  }

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <div className="TodoWrapper">
        <h1>What to do</h1>
        <TodoForm addTask={addTask} />
        {tasks.filter((task) => !task.completed).length > 0 && (
          <h2>Uncompleted Task</h2>
        )}
        {tasks
          .filter((item) => !item.completed)
          .map((item) =>
            item.isEditing ? (
              <EditTodoForm key={item.id} task={item} editTask={editTask} />
            ) : (
              <Todo
                key={item.id}
                task={item}
                completeTask={completeTask}
                deleteTodo={deleteTodo}
                setEditTask={setEditTask}
              />
            )
          )}
        {tasks.filter((task) => task.completed).length > 0 && (
          <h2>Completed Task</h2>
        )}
        {tasks
          .filter((item) => item.completed)
          .map((item) =>
            item.isEditing ? (
              <EditTodoForm task={item} editTask={editTask} />
            ) : (
              <Todo
                key={item.id}
                task={item}
                completeTask={completeTask}
                deleteTodo={deleteTodo}
                setEditTask={setEditTask}
              />
            )
          )}
      </div>
    </>
  );
}
