import './Search.css';

const Search = () => {
  return (
    <section className="search">
      <div className="search__container">
        <div className="search__inputContainer">
          <input type="text" className="search__input"
            placeholder='Фильм'
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Фильм"}
          />
          <button className='search__button'>Найти</button>
        </div>
        <div className="search__switchContainer">
          <label className="search__switch">
            <label htmlFor="checkbox-switch"></label>
            <input className="search__checkbox" type="checkbox" id="checkbox-switch" defaultChecked />
            <span className="search__slider" />
          </label>
          <label htmlFor="checkbox-switch" className="search__switchName">Короткометражки</label>
        </div>
      </div>
      <div className="search__switchContainer search__switchContainer_mobile">
        <label className="search__switch">
          <label htmlFor="checkbox-mobile"></label>
          <input className="search__checkbox" type="checkbox" id="checkbox-mobile" defaultChecked />
          <span className="search__slider" />
        </label>
        <label htmlFor="checkbox-mobile" className="search__switchName">Короткометражки</label>
      </div>
    </section>
  )
}

export default Search;