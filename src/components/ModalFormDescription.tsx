import { ModalDescriptionProps } from "../types";

const ModalFormDescription = ({ description, setDescription }: ModalDescriptionProps) => {
  return (
    <fieldset>
      <dl>
        <dt>
          <label htmlFor="description">Description</label>
        </dt>
        <dd>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'
          >
          </textarea>
        </dd>
      </dl>
    </fieldset>
  )
}

export default ModalFormDescription