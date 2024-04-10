import styles from './ListHeader.module.css'

export function ListHeader() {
    return (
        <div className={styles.container}>
            <aside className={styles.content}>
                <p className={styles.title}>Tarefas criadas</p>
                <span className={styles.count}>0</span>
            </aside>

            <aside className={styles.content}>
                <p className={styles.title}>Concluídas</p>
                <span className={styles.count}>0</span>
            </aside>
        </div>
    )
}