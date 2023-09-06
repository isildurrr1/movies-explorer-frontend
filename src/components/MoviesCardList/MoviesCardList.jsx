import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'
import './MoviesCardList.css';
import { useEffect, useState } from 'react';

import {
  ADD_CARD_1280,
  ADD_CARD_480,
  ADD_CARD_768,
  CARDS_1280,
  CARDS_480,
  CARDS_768,
  SCREEN_480,
  SCREEN_768
} from '../../utils/constants/constants';

import { useResize } from '../../utils/hooks/useResize';

const MoviesCardList = ({ movies, loading }) => {
  const [currentScreen] = useResize();
  const [count, setCount] = useState(CARDS_1280);
  const [addCount, setAddCount] = useState(ADD_CARD_1280);
  
  const addMovies = () => setCount(count + addCount);

  useEffect(() => {
    if (currentScreen === SCREEN_480) {
      setCount(CARDS_480)
      setAddCount(ADD_CARD_480)
    } else if (currentScreen === SCREEN_768) {
      setCount(CARDS_768)
      setAddCount(ADD_CARD_768)
    }
  }, [currentScreen])

  let moviesArray = [];
  if (movies !== undefined) {
    moviesArray = movies
  }
  return (
    <section className='cardList'>
      <div className='cardList__container'>
        {
          moviesArray.length === 0 ? <h1>Ничего не найдено</h1> :
            loading ? <Preloader /> :
              movies.slice(0, count).map((data, i) => <MoviesCard movie={data} key={i} />)
        }
      </div>
      {count < moviesArray.length &&
        <div className='cardList__btnContainer'>
          <button className='cardList__button' onClick={addMovies}>Ещё</button>
        </div>
      }
    </section>
  )
}

export default MoviesCardList;