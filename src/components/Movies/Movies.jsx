import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Search from '../Search/Search';
import './Movies.css';

const Movies = () => {
  return (
    <div className='movies'>
      <Search />
      <MoviesCardList/>
    </div>
  )
}

export default Movies