import axios from 'axios'
import { Todo, NewTodo, UpdateTodo } from '../types'
const baseUrl = '/api'

export const getTodos = async () => {
  try {
    const response = await axios.get<Todo[]>(`${baseUrl}/todos`)
    return response.data
  } catch (error) {
    console.error('Error fetching todos:', error)
  }
}

export const updateTodo = async (todo: UpdateTodo) => {
  try {
    const response = await axios.put<Todo>(`${baseUrl}/todos/${todo.id}`, todo)
    return response.data
  } catch (error) {
    console.error('Error updating todo:', error)
  }
}

export const deleteTodo = async (id: number) => {
  try {
    const response = await axios.delete<void>(`${baseUrl}/todos/${id}`)
    return response.data
  } catch (error) {
    console.error('Error deleting todo:', error)
  }
}

export const createTodo = async (todo: NewTodo) => {
  try {
    const response = await axios.post<Todo>(`${baseUrl}/todos`, todo)
    return response.data
  } catch (error) {
    console.error('Error creating todo:', error)
  }
}
