import { Dispatch, SetStateAction } from 'react'

export interface Todo {
  id: number,
  title: string, 
  completed: boolean, 
  day: string,
  month: string, 
  year: string,
  description: string
}
export type ToggleCompleteTodo = Pick<Todo, 'id' | 'completed'>

export interface UpdateTodo {
  id: number,
  title?: string, 
  completed?: boolean, 
  day?: string, 
  month?: string, 
  year?: string, 
  description?: string
}

export interface NewTodo {
  title: string, 
  completed?: boolean, 
  day?: string, 
  month?: string, 
  year?: string, 
  description?: string
}

export interface TodosProps {
  todos: Todo[],
  onUpdate: (todo: UpdateTodo) => Promise<void>,
  onDelete: (id: number ) => Promise<void>,
  onToggleModal: () => void,
  setEditTodoId: Dispatch<SetStateAction<number | null>>;
}

export interface HeaderProps {
  title: string, 
  count: number
}

export interface TodoItemProps {
  key: number, 
  todo: Todo,
  onUpdate: (todo: UpdateTodo) => Promise<void>,
  onDelete: (id: number ) => Promise<void>,
  onToggleModal: () => void,
  setEditTodoId: Dispatch<SetStateAction<number | null>>;
}

export interface AddButtonProps {
  onToggleModal: () => void,
  setEditTodoId: Dispatch<SetStateAction<number | null>>;
}

export interface ModalProps {
  isEditTodo: boolean,
  editTodo: Todo | undefined,
  onCreate: (todo: NewTodo) => Promise<void>,
  onToggleModal: () => void,
  onUpdate: (todo: UpdateTodo) => Promise<void>,
}

export interface ModalTitleProps {
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>
}

export interface ModalDayProps {
  selectedDay: string,
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>
}

export interface ModalMonthProps {
  selectedMonth: string,
  setSelectedMonth: React.Dispatch<React.SetStateAction<string>>
}

export interface ModalYearProps {
  selectedYear: string, 
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>
}

export interface ModalDescriptionProps {
  description: string,
  setDescription: React.Dispatch<React.SetStateAction<string>>
}