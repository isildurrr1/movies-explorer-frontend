import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Promo from "./Promo/Promo";
import Footer from "../Footer/Footer";
import NavTab from "./NavTab/NavTab";


const Main = () => {
  return (
    <main className="main">
      <Promo/>
      <NavTab/>
      <AboutProject />
      <Techs />
      <Footer/>
    </main>
  );
};

export default Main;