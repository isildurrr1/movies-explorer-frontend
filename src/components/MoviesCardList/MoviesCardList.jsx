import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'
import './MoviesCardList.css';
import allMovies from '../../utils/movies-data'
import saviedMovies from '../../utils/saved-movies'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCardList = () => {
  const location = useLocation();
  let movies = [];
  if (location.pathname === '/movies') {
    movies = allMovies;
  } else {
    movies = saviedMovies;
  }
  const [count, setCount] = useState(12);
  const addMovies = () => setCount(count + 12);
  return (
    <section className='cardList'>
      <div className='cardList__container'>
        {
          movies.length === 0 ? <Preloader /> :
            movies.slice(0, count).map((data, i) => <MoviesCard movie={data} key={i} />)
        }
      </div>
      {count < movies.length &&
        <div className='cardList__btnContainer'>
          <button className='cardList__button' onClick={addMovies}>Ещё</button>
        </div>
      }
    </section>
  )
}

export default MoviesCardList;