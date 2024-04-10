import { PlusCircle } from '@phosphor-icons/react'

import { ListHeader } from './components/List/ListHeader';
// import { Empty } from './components/List/Empty';
import { Item } from './components/List/Item';
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

import './global.css';

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Input />
          
          <Button>
              Criar
            <PlusCircle />
          </Button>
        </div>

        <div className={styles.tasklist}>
          <ListHeader />

          <Item />

        </div>
      </div>
    </div>
  )
}

export default App