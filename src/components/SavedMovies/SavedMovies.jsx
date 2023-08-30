import React from 'react'
import Search from '../Search/Search'
import Preloader from '../Preloader/Preloader'

const SavedMovies = () => {
  return (
    <div className='saved-movies'>
      <Search />
      <Preloader />
    </div>
  )
}

export default SavedMovies