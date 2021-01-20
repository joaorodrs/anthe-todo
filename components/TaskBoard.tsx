import styles from '../styles/components/TaskBoard.module.css'

interface TaskBoardProps {
  taskCategory: string
}

const TaskBoard: React.FC<TaskBoardProps> = ({ taskCategory }) => {
  return (
    <h1 className={styles.title}>{taskCategory}</h1>
  )
}

export default TaskBoard