import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__title">Портфолио</h3>
        <Link
          className="portfolio__link portfolio__link_how-to-lern"
          to="https://isildurrr1.github.io/how-to-learn/"
          target="blank"
        >
        </Link>
        <div className="portfolio__line"/>
        <Link
          className="portfolio__link portfolio__link_ru-travel"
          to="https://isildurrr1.github.io/russian-travel/"
          target="blank"
        >
        </Link>
        <div className="portfolio__line"/>
        <Link
          className="portfolio__link portfolio__link_mesto"
          to="https://isildurrr1.github.io/mesto/"
          target="blank"
        >
        </Link>
      </div>
    </section>
  )
}

export default Portfolio;
