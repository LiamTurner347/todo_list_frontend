import { ModalTitleProps } from "../types"

const ModalFormTitle = ({ title, setTitle }: ModalTitleProps) => {
  return (
    <fieldset>
      <dl>
        <dt>
          <label htmlFor="title">Title</label>
        </dt>
        <dd>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder='Required (3 characters minimum)'
          />
        </dd>
      </dl>
    </fieldset>
  )
}

export default ModalFormTitle