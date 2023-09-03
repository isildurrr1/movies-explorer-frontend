import { Link, useLocation } from "react-router-dom"
import './ProfileButton.css'

const ProfileButton = () => {
  const location = useLocation();
  return (
    <Link
      to='/profile'
      className={`account ${location.pathname === '/' ? 'account_darkTheme' : ''}`}
    >
      Аккаунт
    </Link>
  )
}

export default ProfileButton