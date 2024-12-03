import { ModalMonthProps } from "../types";
import { MONTHS } from "../utils/utils";

const ModalFormMonth = ({ selectedMonth, setSelectedMonth }: ModalMonthProps) => {
  return (
    <>
      <dt>
        <label htmlFor="month" hidden>Month</label>
      </dt>
      <dd>
        <select
          name="month"
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="" disabled>
            Month
          </option>
          {MONTHS.map((month) => {
            return <option key={month} value={month}>{month}</option>
          })}
        </select>
      </dd>
    </>
  )
}

export default ModalFormMonth