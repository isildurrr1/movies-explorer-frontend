import './Search.css';

const Search = () => {
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__input-container">
          <div className="search__icon" />
          <input type="text" className="search__input"
            placeholder='Фильм'
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Фильм"}
          />
          <button className='search__button'>Найти</button>
        </div>
        <div className="search__switch-container">
          <label className="search__switch">
            <label htmlFor="checkbox-switch"></label>
            <input className="search__checkbox" type="checkbox" id="checkbox-switch" />
            <span className="search__slider" />
          </label>
          <p className="search__switch-name">Короткометражки</p>
        </div>
      </div>
      <div className="search__switch-container search__switch-container_mobile">
        <label className="search__switch">
          <label htmlFor="checkbox-switch"></label>
          <input className="search__checkbox" type="checkbox" id="checkbox-switch" />
          <span className="search__slider" />
        </label>
        <p className="search__switch-name">Короткометражки</p>
      </div>
      <div className="search__line" />
    </div>
  )
}

export default Search;