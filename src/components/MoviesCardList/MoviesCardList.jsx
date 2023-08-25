import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import movies from '../../utils/movies-data'

const MoviesCardList = () => {
  return (
    <div className='card-list'>
      {movies.map((data, i) => <MoviesCard movie={data} key={i} />)}
    </div>
  )
}

export default MoviesCardList;