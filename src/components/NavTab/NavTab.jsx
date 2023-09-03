import './NavTab.css';

const NavTab = () => {
  return (
    <section className="navTab">
      <nav className="navTab__links">
        <a href="#about" className="navTab__link">О проекте</a>
        <a href="#techs" className="navTab__link">Технологии</a>
        <a href="#student" className="navTab__link" >Студент</a>
      </nav>
    </section>
  );
};

export default NavTab;