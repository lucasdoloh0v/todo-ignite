import { Task } from '../App';
import styles from './TasksBoard.module.css';
import clipboard from '../assets/Clipboard.svg';
import TaskBox from './TaskBox';

interface TasksProps {
  tasks: Task[];
  handleDeleteTask: (taskToDelete: Task) => void;
  handleCompleteTask: (taskToComplete: Task) => void;
}

function TasksBoard({ tasks, handleDeleteTask, handleCompleteTask }: TasksProps) {
  const numberOfTasks = tasks.length;
  const numberOfDoneTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className={styles.tasks}>
      <header>
        <p className={styles.taskCounter}>
          Tarefas criadas <span>{numberOfTasks}</span>
        </p>
        <p className={styles.taskDoneCounter}>
          Concluidas{' '}
          <span>
            {numberOfTasks
              ? `${numberOfDoneTasks} de ${numberOfTasks}`
              : numberOfTasks}
          </span>
        </p>
      </header>
      {numberOfTasks != 0 ? (
        tasks.map((task) => <TaskBox key={task.id} task={task} handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} />)
      ) : (
        <div className={styles.noTasks}>
          <img src={clipboard} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  );
}

export default TasksBoard;
