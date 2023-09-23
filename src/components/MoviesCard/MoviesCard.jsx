import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { mainApi } from '../../utils/MainApi';
import { useEffect, useState } from 'react';

const MoviesCard = ({ movie, myMovies, setHideCard }) => {

  const location = useLocation();
  const [saved, setSaved] = useState(true)
  const [id, setId] = useState(null);

  useEffect(() => {
    const checkMovie = myMovies.find((e) => e.nameRU === movie.nameRU)
    if (checkMovie) {
      setId(checkMovie._id)
      setSaved(true)
    } else {
      setSaved(false)
    }
  }, [myMovies, movie.nameRU])


  const saveMovie = () => {
    if (!saved) {
      mainApi.saveMovie(movie)
        .then((res) => {
          setId(res._id)
          setSaved(true)
        })
        .catch(err => console.log(err));
    }
  }

  const deleteMovie = () => {
    if (saved) {
      mainApi.deleteMyMovie(id)
        .then(() => {
          if (location.pathname !== '/movies') {
            setHideCard(true)
          }
          setSaved(false)
        })
        .catch(err => console.log(err))
    }
  }
  return (
    <article className='moviesCard'>
      {saved ?
        <button
          className={`moviesCard__saved ${location.pathname !== '/movies' ? 'moviesCard__saved_hidden' : ''}`}
          onClick={deleteMovie}
        />
        :
        <button
          className="moviesCard__save-btn"
          onClick={saveMovie}
        >Сохранить</button>}
      <Link to={movie.trailerLink} className="moviesCard__link" target='blank'>
        <img src={`${location.pathname === '/movies' ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image}`}
          alt="Обложка"
          className="moviesCard__frame" />
        <div className="moviesCard__discription">
          <h2 className="moviesCard__name">{movie.nameRU}</h2>
          <p className="moviesCard__duration">{
            movie.duration > 60 ?
              `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`
              : `${movie.duration}м`
          }</p>
        </div>
      </Link>
    </article>
  )
}

export default MoviesCard;