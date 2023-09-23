import { useEffect, useState } from 'react'
import Search from '../Search/Search'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { mainApi } from '../../utils/MainApi';



const SavedMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [hideCard, setHideCard] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [shortActive, setShortActive] = useState(false);

  const handleSearch = (searchString) => setSearchQuery(searchString);
  const handleShortFilms = () => setShortActive(!shortActive)

  const searchMovieFilter = (allMovies, searchQueryStr, shortActive) => {
    const reg = new RegExp(`${searchQueryStr}`, 'i')
    let filtredMovies = allMovies.filter(function (movie) {
      return reg.test(movie.nameRU);
    })
    if (shortActive) {
      return filtredMovies.filter(function (movie) {
        return movie.duration <= 40;
      })
    }
    return filtredMovies;
  }

  useEffect(() => {
    mainApi.getMyMovies()
      .then((res) => {
        setHideCard(false)
        setLoading(true);
        setMovies(searchMovieFilter(res, searchQuery, shortActive));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err)
      })
  }, [searchQuery, shortActive, hideCard])

  return (
    <section className='savedMovies'>
      <Search
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        shortFilmsActive={shortActive}
        handleShortFilms={handleShortFilms}
      />
      <MoviesCardList movies={movies} loading={loading} setHideCard={setHideCard}/>
    </section>
  )
}

export default SavedMovies