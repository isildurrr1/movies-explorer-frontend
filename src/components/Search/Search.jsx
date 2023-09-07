import { useState } from 'react';
import './Search.css';

const Search = ({ handleSearch, searchQuery, shortFilmsActive, handleShortFilms }) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const handleChange = (e) => setInputValue(e.target.value);
  const handleShort = () => {
    handleShortFilms()
  }

  const searchSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      handleSearch(inputValue);
    }
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__inputContainer" onSubmit={searchSubmit}>
          <input type="text" className="search__input"
            placeholder='Фильм'
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Фильм"}
            onChange={handleChange}
            value={inputValue}
          />
          <button className='search__button' type='submit'>Найти</button>
        </form>
        <div className="search__switchContainer">
          <label className="search__switch">
            <label htmlFor="checkbox-switch"></label>
            <input className="search__checkbox" type="checkbox" id="checkbox-switch" checked={shortFilmsActive} onChange={handleShort} />
            <span className="search__slider" />
          </label>
          <label htmlFor="checkbox-switch" className="search__switchName">Короткометражки</label>
        </div>
      </div>
      <div className="search__switchContainer search__switchContainer_mobile">
        <label className="search__switch">
          <label htmlFor="checkbox-mobile"></label>
          <input className="search__checkbox" type="checkbox" id="checkbox-mobile" checked={shortFilmsActive} onChange={handleShort} />
          <span className="search__slider" />
        </label>
        <label htmlFor="checkbox-mobile" className="search__switchName">Короткометражки</label>
      </div>
    </section>
  )
}

export default Search;