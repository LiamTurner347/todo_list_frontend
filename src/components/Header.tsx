import { HeaderProps } from '../types'

const Header = ({ title, count }: HeaderProps) => {
  return (
    <>
      <h1>{title}{' '}
        <span className="badge badge-selected">
          {count}
        </span>
      </h1>
    </>
  )
}

export default Header