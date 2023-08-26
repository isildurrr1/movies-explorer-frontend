import './MoviesCard.css';

const MoviesCard = ({movie}) => {
  return (
    <article className='movies-card'>
      {movie.saved ? <div className="movies-card__saved" />
      : <div className="movies-card__save-btn">Сохранить</div>}
      <img src={movie.frame} alt="img" className="movies-card__frame" />
      <div className="movies-card__discription">
        <span className="movies-card__name">{movie.name}</span>
        <div className="movies-card__duration">{movie.duration}</div>
      </div>
    </article>
  )
}

export default MoviesCard;