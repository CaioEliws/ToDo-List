import { PlusCircle } from '@phosphor-icons/react'

import { ListHeader } from './components/List/ListHeader';
import { Empty } from './components/List/Empty';
import { Item } from './components/List/Item';

import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

import { useState } from 'react';

import './global.css';

import styles from './App.module.css';

export interface TaskProps {
  id: number
  text: string
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTasks() {
    event?.preventDefault()

    const newTask: TaskProps = {
      id: new Date().getTime(), // Gere um novo ID para a nova tarefa
      text: newTaskText // Use o texto atual da nova tarefa
    };

    setTasks([...tasks, newTask])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function handleDeleteTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if(!confirm('Deseja realmente apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTasks} className={styles.header}>
          <Input 
            onChange={handleNewTaskChange}
            value={newTaskText}
            name='task'
          />
          
          <Button type='submit'>
              Criar
            <PlusCircle />
          </Button>
        </form>

        <div className={styles.tasklist}>
          <ListHeader />

          
          {tasks.length > 0 ? (
            <div>
                {tasks.map(task => {
                  return (
                    <Item
                      key={task.id}
                      data={task}
                      removeTask={handleDeleteTask}
                    />
                  )
                })}
            </div>
          ) : (
            <Empty />
          )}

        </div>
      </div>
    </div>
  )
}

export default App