import { ModalDayProps } from '../types'

const ModalFormDay = ({ selectedDay, setSelectedDay }: ModalDayProps) => {
  return (
    <>
      <dt>
        <label htmlFor="day">Due Date</label>
      </dt>
      <dd>
        <select
          name="day"
          id="day"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="" disabled>
            Day
          </option>
          {[...Array(31).keys()].map((key) => {
            return <option key={key + 1} value={String(key + 1)}>{key + 1}</option>
          })}
        </select>
      </dd>
    </>
  )
}

export default ModalFormDay