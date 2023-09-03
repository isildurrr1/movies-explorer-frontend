import React from 'react'
import Search from '../Search/Search'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

const SavedMovies = () => {
  return (
    <section className='saved-movies'>
      <Search />
      <MoviesCardList/>
    </section>
  )
}

export default SavedMovies