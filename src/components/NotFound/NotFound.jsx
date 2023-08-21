import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Страница не найдена</p>
      </div>
      <Link className='error__link' onClick={() => navigate(-1)} >Назад</Link>
    </div>
  )
}

export default NotFound
