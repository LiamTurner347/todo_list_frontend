import { TodosProps } from '../types'
import { sortTodosByCompletion } from '../utils/utils'
import { TodoItem } from './TodoItem'

export const TodoList = ({ 
  todos,
  onUpdate, 
  onDelete,
  onToggleModal,
  setEditTodoId,
}: TodosProps) => {
  return (
    <>
      <ul>
        {sortTodosByCompletion(todos).map((todo) => (<TodoItem 
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggleModal={onToggleModal}
          setEditTodoId={setEditTodoId}
        />))} 
      </ul>
    </>
  )
}

export default TodoList