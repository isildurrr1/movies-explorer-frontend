import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ movie }) => {
  const location = useLocation();
  return (
    <article className='moviesCard'>
      {movie.saved ? <button className={`moviesCard__saved ${location.pathname !== '/movies' ? 'moviesCard__saved_hidden' : ''}`} />
        : <button className="moviesCard__save-btn">Сохранить</button>}
      <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt="Обложка" className="moviesCard__frame" />
      <div className="moviesCard__discription">
        <h2 className="moviesCard__name">{movie.nameRU}</h2>
        <p className="moviesCard__duration">{
          movie.duration > 60 ?
            `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`
            : `${movie.duration}м`
        }</p>
      </div>
    </article>
  )
}

export default MoviesCard;