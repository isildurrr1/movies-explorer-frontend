import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolio from "./Portfolio/AboutMe";
import BurgerMenu from "../Header/BurgerMenu/BurgerMenu";
import './Main.css'
import { useState } from "react";

const Main = ({ loggedIn }) => {
  const [menuActive, setMenuActive] = useState(true);
  const toggleMenuActive = () => setMenuActive(menuActive);
  return (
    <main className="main">
      {menuActive && <BurgerMenu closeMenu={toggleMenuActive}/>}
      <Header loggedIn={loggedIn} bgColor={'pink'} menuActive={toggleMenuActive} />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Main;