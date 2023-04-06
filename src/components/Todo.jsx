import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faCheck,
  faRotateLeft,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

export default function Todo({ task, deleteTodo, completeTask, setEditTask }) {
  return (
    <>
      <div className="Todo">
        <p className={task.completed && 'completed'}>{task.task}</p>
        <div className="icon">
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => setEditTask(task.id)}
          />
          <FontAwesomeIcon
            icon={task.completed ? faRotateLeft : faCheck}
            onClick={() => completeTask(task.id)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => deleteTodo(task.id)}
          />
        </div>
      </div>
    </>
  );
}
