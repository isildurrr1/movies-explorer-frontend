import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Search from '../Search/Search';
import './Movies.css';
import { moviesApi } from '../../utils/MoviesApi';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = (searchString) => setSearchQuery(searchString);

  const searchMovieFilter = (allMovies, searchQueryStr) => {
    const reg = new RegExp(`${searchQueryStr}`, 'i')
    return allMovies.filter(function (movie) {
      return reg.test(movie.nameRU);
    })
  }

  useEffect(() => {
    if (searchQuery) {
      moviesApi.getMovies()
        .then((res) => {
          setMovies(searchMovieFilter(res, searchQuery));
          setSearchQuery('');
        })
        .catch(err => console.log(err))
    }
  }, [searchQuery]);



  return (
    <main className='movies'>
      <Search handleSearch={handleSearch} />
      <MoviesCardList movies={movies} loading={searchQuery} />
    </main>
  )
}

export default Movies