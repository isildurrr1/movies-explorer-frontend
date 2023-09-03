import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__title">Портфолио</h3>
        <Link
          className="portfolio__link portfolio__link_howToLern"
          to="https://isildurrr1.github.io/how-to-learn/"
          target="blank"
        >
        </Link>
        <Link
          className="portfolio__link portfolio__link_border portfolio__link_ruTravel"
          to="https://isildurrr1.github.io/russian-travel/"
          target="blank"
        >
        </Link>
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
