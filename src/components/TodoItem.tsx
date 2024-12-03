import { TodoItemProps } from '../types'
import { formatDueDate } from '../utils/utils'

export const TodoItem = ({ 
  todo,
  onUpdate, 
  onDelete,
  onToggleModal,
  setEditTodoId
}: TodoItemProps) => {
  const dueDate = formatDueDate(todo)

  const handleCheckboxClick = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    onUpdate({ id: todo.id, completed: !todo.completed })
  }

  const handleDeleteClick = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    onDelete(todo.id)
  }

  const handleToggleEditModal = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    setEditTodoId(todo.id)
    onToggleModal()
  }
  
  return (
    <li 
      className={todo.completed ? 'completed': ''}
    >
      <div
        className="checkbox"
        onClick={handleCheckboxClick}
      >
      </div>
      <span
        className="todo-title"
        onClick={handleToggleEditModal}
      >
        {todo.title} - {dueDate}
      </span>
      <button
        className="delete"
        onClick={handleDeleteClick}
      >
      </button>
    </li>
  )
}

export default TodoItem