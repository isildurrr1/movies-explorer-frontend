import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import movies from '../../utils/movies-data'
import { useState } from 'react';

const MoviesCardList = () => {
  const [count, setCount] = useState(12);
  const addMovies = () => setCount(count + 12);
  return (
    <>
      <div className='card-list'>
        {movies.slice(0, count).map((data, i) => <MoviesCard movie={data} key={i} />)}
      </div>
      {count < movies.length &&
        <div className='card-list__btn-container'>
          <button className='card-list__button' onClick={addMovies}>Ещё</button>
        </div>
      }
    </>
  )
}

export default MoviesCardList;