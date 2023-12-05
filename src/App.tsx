import { useState } from 'react'
import CreateTask from './components/CreateTask'
import Header from './components/Header'
import TasksBoard from './components/TasksBoard'
import './global.css'

export interface Task {
  id: number
  isCompleted: boolean
  content: string
}

function App() {
  const [tasks, setTaks] = useState<Task[]>([])

  const handleCreateTask = (task: Omit<Task, 'id'>) => {
    setTaks(prev => [...prev, {...task, id: prev.length + 1}])
  }

  const handleDeleteTask = (taskToDelete: Task) => {
    const tasksToSet = tasks.filter(task => task.id !== taskToDelete.id)
    setTaks(tasksToSet)
  }

  const handleCompleteTask = (taskToComplete: Task) => {
    const tasksToSet = tasks.map(task => task.id === taskToComplete.id ? {...task, isCompleted: !task.isCompleted} : task)
    setTaks(tasksToSet)
  }

  return (
    <>
      <Header />
      <main>
        <CreateTask handleCreateTask={handleCreateTask} />
        <TasksBoard handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} tasks={tasks} />
      </main>
    </>
  )
}

export default App
