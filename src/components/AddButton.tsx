import { AddButtonProps } from '../types'

const AddButton = ({ 
  onToggleModal, 
  setEditTodoId
}: AddButtonProps) => {
  
  const handleAddClick = () => {
    onToggleModal()
    setEditTodoId(null)
  }

  return (
    <button
      className="add-todo"
      onClick={handleAddClick}
    >
      Add New Todo
    </button>
  )
}

export default AddButton