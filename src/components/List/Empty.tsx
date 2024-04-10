import { ClipboardText } from '@phosphor-icons/react';

import styles from './Empty.module.css'

export function Empty() {
    return (
        <div className={styles.container}>
            <ClipboardText size={32} className={styles.image} />

            <div className={styles.box}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}