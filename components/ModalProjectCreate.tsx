import Modal from './Modal'

interface ModalProjectCreateProps {
  onBackdropPress: () => void
}

const ModalProjectCreate: React.FC<ModalProjectCreateProps> = ({ onBackdropPress }) => {
  return (
    <Modal onBackdropPress={onBackdropPress}>
      <h2>Criar projeto</h2>
      <div>
        <input placeholder="Comprar arroz" />
        <select name="" id="">
          <option value="">()</option>
        </select>
      </div>
      <button>Criar projeto</button>
    </Modal>
  )
}

export default ModalProjectCreate