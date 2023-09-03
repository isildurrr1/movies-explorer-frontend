import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({movie}) => {
  const location = useLocation();
  return (
    <article className='movies-card'>
      {movie.saved ? <button className={`movies-card__saved ${location.pathname !== '/movies' ? 'movies-card__saved_hidden' : ''}`} />
      : <button className="movies-card__save-btn">Сохранить</button>}
      <img src={movie.frame} alt="img" className="movies-card__frame" />
      <div className="movies-card__discription">
        <h4 className="movies-card__name">{movie.name}</h4>
        <p className="movies-card__duration">{movie.duration}</p>
      </div>
    </article>
  )
}

export default MoviesCard;