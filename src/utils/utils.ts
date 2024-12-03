import { Todo } from '../types'

export const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const correctDate = (todo: Todo): Todo => {
  if (todo.day && todo.day === '00') {
    todo.day = ''
  }
  if (todo.month === '00') {
    todo.month = ''
  }
  if (todo.year === '0000') {
    todo.year = ''
  }
  return todo
}

export const dayToNumericalRepresentation = (day: string): string => {
  return padNumber(String(day))
}

export const formatDueDate = (todo: Todo): string => {
  if (todo.month && todo.year) {
    const formattedMonth = padNumber(todo.month)
    const formattedYear = formatYear(todo.year)
    return `${formattedMonth}/${formattedYear}`
  } else {
    return 'No Due Date'
  }
}

export const padNumber = (number: string): string => {
  if (number.length < 2) {
    return number.padStart(2, '0')
  } else {
    return number
  }
}

export const formatYear = (year: string): string => {
  return year.slice(2)
}

export const monthToNumericalRepresentation = (month: string): string => {
  const number = MONTHS.indexOf(month) + 1
  return padNumber(String(number))
}

export const numericalRepresentationToMonth = (month: string): string => {
  return MONTHS[parseInt(month) - 1] || ''
}

export const sortTodosByCompletion = (todos: Todo[]): Todo[] => {
  const completedTodos = todos.filter(todo => todo.completed)
  const uncompletedTodos = todos.filter(todo => !todo.completed)
  return uncompletedTodos.concat(completedTodos)
}

export const trimDay = (day: string): string => {
  if (day.length === 2 && day[0] === '0') {
    return day.slice(1)
  } else {
    return day
  }
}