import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Search from '../Search/Search';
import './Movies.css';

const Movies = () => {
  return (
    <main className='movies'>
      <Search />
      <MoviesCardList/>
    </main>
  )
}

export default Movies