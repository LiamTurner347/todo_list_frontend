import { ModalYearProps } from '../types';

const ModalFormYear = ({ selectedYear, setSelectedYear }: ModalYearProps) => {
  return (
    <>
      <dt>
        <label htmlFor="year" hidden>Year</label>
      </dt>
      <dd>
        <select
          name="year"
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="" disabled>
            Year
          </option>
          {[...Array(20).keys()].map((key) => {
            return <option key={2024 + key} value={String(2024 + key)}>{2024 + key}</option>
          })}
        </select>
      </dd>
    </>
  )
}

export default ModalFormYear