import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <h4 className="portfolio__title">Портфолио</h4>
        <Link
          className="portfolio__link"
          to="https://isildurrr1.github.io/how-to-learn/"
          target="blank"
        >
          <p className="portfolio__text">Статичный сайт</p>
          <p className="portfolio__text">↗</p>
        </Link>
        <div className="portfolio__line"/>
        <Link
          className="portfolio__link"
          to="https://isildurrr1.github.io/russian-travel/"
          target="blank"
        >
          <p className="portfolio__text">Адаптивный сайт</p>
          <p className="portfolio__text">↗</p>
        </Link>
        <div className="portfolio__line"/>
        <Link
          className="portfolio__link"
          to="https://isildurrr1.github.io/mesto/"
          target="blank"
        >
          <p className="portfolio__text">Одностраничное приложение</p>
          <p className="portfolio__text">↗</p>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio;
