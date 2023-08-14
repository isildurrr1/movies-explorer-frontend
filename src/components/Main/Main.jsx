import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolio from "./Portfolio/AboutMe";

const Main = ({ loggedIn }) => {
  return (
    <main className="main">
      <Header loggedIn={loggedIn} bgColor={'pink'} />
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