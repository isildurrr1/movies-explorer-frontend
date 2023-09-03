import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({movie}) => {
  const location = useLocation();
  return (
    <article className='moviesCard'>
      {movie.saved ? <button className={`moviesCard__saved ${location.pathname !== '/movies' ? 'moviesCard__saved_hidden' : ''}`} />
      : <button className="moviesCard__save-btn">Сохранить</button>}
      <img src={movie.frame} alt="Обложка" className="moviesCard__frame" />
      <div className="moviesCard__discription">
        <h2 className="moviesCard__name">{movie.name}</h2>
        <p className="moviesCard__duration">{movie.duration}</p>
      </div>
    </article>
  )
}

export default MoviesCard;