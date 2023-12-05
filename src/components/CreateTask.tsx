import { PlusCircle } from '@phosphor-icons/react';
import styles from './CreateTask.module.css'
import { Task } from '../App';
import { FormEvent, useState } from 'react';

interface CreateTaskProps {
  handleCreateTask: (task: Omit<Task, 'id'>) => void
}

function CreateTask({handleCreateTask}: CreateTaskProps) {
  const [newTaskContent, setNewTaskContent] = useState('')
  
  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newTask = {
      content: newTaskContent,
      isCompleted: false
    }
    handleCreateTask(newTask)
    setNewTaskContent('')
  }
  
  return (
    <form onSubmit={handleSubmitForm} className={styles.newTaskForm}>
      <input type="text" required placeholder="Adicione uma nova tarefa" value={newTaskContent} onChange={(e) => setNewTaskContent(e.target.value)} />
      <button type="submit" disabled={!newTaskContent}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}

export default CreateTask;