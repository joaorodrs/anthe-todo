import styles from '../styles/components/Modal.module.css'

interface ModalProps {
  children: React.ReactNode,
  onBackdropPress: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onBackdropPress }) => {
  return (
    <main className={styles.modalMain}>
      <div
        className={styles.modalBackdrop}
        onClick={onBackdropPress}
      />
      <div className={styles.modalContainer}>
        {children}
      </div>
    </main>
  )
}

export default Modal