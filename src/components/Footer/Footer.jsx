import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__name">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </div>
        <div className="footer__links-container">
          <span class="footer__copyright">© 2023</span>
          <nav class="footer__links">
            <a href="https://practicum.yandex.ru/" class="footer__link" target="blank">Яндекс.Практикум</a>
            <a href="https://github.com/isildurrr1" class="footer__link" target="blank">Github</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
