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

function App() {
  const [tasks, setTasks] = useState([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTasks() {
    event?.preventDefault()

    setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
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

          {tasks.map(task => {
            return <Item text={task} />
          })}

        </div>
      </div>
    </div>
  )
}

export default App