import { Link } from 'react-router-dom'
import './Button.css'

function Button({ content, to }) {
  if (to) {
    return (
      <Link to={to} className="btn">
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className="btn">
      {content}
    </button>
  )
}

export default Button
