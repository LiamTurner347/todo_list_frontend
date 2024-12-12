import './App.css'
import { useEffect, useState } from 'react'
import { getTodos, updateTodo, deleteTodo, createTodo } from './services/todos'
import { Todo, NewTodo, UpdateTodo } from './types'
import { correctDate } from './utils/utils'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddButton from './components/AddButton'
import ModalTodoForm from './components/ModalTodoForm'

function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [todos, setTodos] = useState<Todo[]>([])
  const [editTodoId, setEditTodoId] = useState<number | null>(null)

  // get initial todos
  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      const data = await getTodos()
      if (data) {
        setTodos(data)
      }
    }
    fetchTodos()
  }, [])

  // locate todo for editing, where relevant
  let editTodo: Todo | undefined = undefined 
  if (editTodoId) {
    editTodo = todos.find((todo) => todo.id === editTodoId)
  } 

  // handle creation of todo
  const handleCreateTodo = async (todo: NewTodo): Promise<void> => {
    const newTodo = await createTodo(todo)
    if (newTodo) {
      setTodos((prevState) => prevState.concat(correctDate(newTodo)))
    }
  }

  // handle delete todo
  const handleDelete = async (id: number ): Promise<void> => {
    const response: boolean = await deleteTodo(id)
    if (response) {
      setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    }
  }

  // handle click outside modal form
  const handleMouseDown = async (e: React.SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      handleToggleModal()
    }
  }
  
  // handle update todo
  const handleUpdateTodo = async (todo: UpdateTodo): Promise<void> => {
    const updatedTodo = await updateTodo(todo)
    if (updatedTodo) {
      setTodos((prevState) => 
        prevState.map((t) => {
          if (t.id === todo.id) {
            return { ...correctDate(updatedTodo) }
          } else {
            return t
          }
        })
      )
    }
  }
  
  // toggle modal visibility
  const handleToggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <main>
      <Header
        title={'All Todos'}
        count={todos.length}
      />
      <AddButton 
        onToggleModal={handleToggleModal}
        setEditTodoId={setEditTodoId}
      />
      <TodoList
        todos = {todos}
        onUpdate = {handleUpdateTodo}
        onDelete = {handleDelete}
        onToggleModal={handleToggleModal}
        setEditTodoId={setEditTodoId}
      />
      {modalVisible && (
        <aside onMouseDown = {handleMouseDown}>
          <ModalTodoForm
            isEditTodo={!!editTodoId}
            editTodo={editTodo}
            onCreate={handleCreateTodo}
            onToggleModal={handleToggleModal}
            onUpdate={handleUpdateTodo}
          />
        </aside>
      )}
    </main>
  )
}

export default App
