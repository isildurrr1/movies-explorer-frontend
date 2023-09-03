import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__name">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__links-container">
          <p className="footer__copyright">© 2023</p>
          <nav className="footer__links">
            <a href="https://practicum.yandex.ru/" className="footer__link" target="blank">Яндекс.Практикум</a>
            <a href="https://github.com/isildurrr1" className="footer__link" target="blank">Github</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
