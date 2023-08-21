import './NavTab.css';

const NavTab = () => {
  return (
    <div className="navtab">
      <nav className="navtab__links">
        <a href="#about" className="navtab__link">О проекте</a>
        <a href="#techs" className="navtab__link">Технологии</a>
        <a href="#student" className="navtab__link" >Студент</a>
      </nav>
    </div>
  );
};

export default NavTab;