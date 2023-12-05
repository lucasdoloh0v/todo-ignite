import { Trash } from '@phosphor-icons/react';
import { Task } from '../App';
import styles from './TaskBox.module.css'

interface TaskProps {
  task: Task;
  handleDeleteTask: (task: Task) => void
  handleCompleteTask: (taskToComplete: Task) => void;
}

function TaskBox({ task, handleDeleteTask, handleCompleteTask }: TaskProps) {
  return (
    <div className={styles.taskBox}>
      <input type='checkbox' checked={task.isCompleted} onChange={() => handleCompleteTask(task)} />
      <p>{task.content}</p>
      <Trash size={24} onClick={() => handleDeleteTask(task)} />
    </div>
  );
}

export default TaskBox;
