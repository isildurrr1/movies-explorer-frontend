import './NavTab.css';

const NavTab = () => {
  return (
    <div className="navtab">
      <nav class="navtab__links">
        <a href="#about" class="navtab__link">О проекте</a>
        <a href="#techs" class="navtab__link">Технологии</a>
        <a href="#student" class="navtab__link" >Студент</a>
      </nav>
    </div>
  );
};

export default NavTab;