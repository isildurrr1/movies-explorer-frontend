import Header from "../../Header/Header";
import './Promo.css'
import practicum_logo from '../../../images/practicum_logo.svg'

const Promo = () => {
  return (
    <div className="promo">
      <Header />
      <h1 className="promo__title">
        Учебный проект студента
        факультета Веб-разработки.
      </h1>
      <img
        className="promo__image"
        src={practicum_logo}
        alt="practicum_logo"
      />
    </div>
  );
};

export default Promo;