import { useState } from 'react'
import { ModalProps } from '../types'
import {  
  monthToNumericalRepresentation,
  dayToNumericalRepresentation,
  numericalRepresentationToMonth,
  trimDay 
} from '../utils/utils'
import { NewTodo, UpdateTodo } from '../types'
import ModalFormTitle from './ModalFormTitle'
import ModalFormDay from './ModalFormDay'
import ModalFormMonth from './ModalFormMonth'
import ModalFormYear from './ModalFormYear'
import ModalFormDescription from './ModalFormDescription'

const ModalTodoForm = ({
  isEditTodo,
  editTodo,
  onCreate,
  onToggleModal,
  onUpdate
}: ModalProps) => {
  const [title, setTitle] = useState(isEditTodo && editTodo ? editTodo.title : '')
  const [selectedDay, setSelectedDay] = useState(isEditTodo && editTodo ? trimDay(editTodo.day) : '')
  const [selectedMonth, setSelectedMonth] = useState(isEditTodo && editTodo ? numericalRepresentationToMonth(editTodo.month) : '')
  const [selectedYear, setSelectedYear] = useState(isEditTodo && editTodo ? editTodo.year : '')
  const [description, setDescription] = useState(isEditTodo && editTodo ? editTodo.description : '')

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    
    const todoData: NewTodo = {
      title,
      day: dayToNumericalRepresentation(selectedDay),
      month: monthToNumericalRepresentation(selectedMonth), 
      year: selectedYear, 
      completed: false, 
      description,
    }

    if (editTodo) {
      const updateTodo: UpdateTodo = {id: editTodo.id, ...todoData}
      onUpdate(updateTodo)
    } else {
      onCreate(todoData)
    }

    onToggleModal()
  }

  // Split up the form functionality??
  return (
    <form id="modal">
      <ModalFormTitle
        title={title}
        setTitle={setTitle} 
      />
      <fieldset>
        <dl>
          <ModalFormDay
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
          <ModalFormMonth
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
          <ModalFormYear
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        </dl>
      </fieldset>

      <ModalFormDescription
        description={description}
        setDescription={setDescription}
      />
      
      <div className="modal-buttons">
        <button type="submit" onClick={handleSubmit} disabled={!title}>
          Save
        </button>
        <button
          type="button"
          disabled={!isEditTodo}
          onClick={() =>
            editTodo && onUpdate({ id: editTodo.id, completed: true })
          }
        >
          Mark As Complete
        </button>
      </div>
    </form>
    
  )
}

export default ModalTodoForm