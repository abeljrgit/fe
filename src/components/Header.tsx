import { useEffect, useState } from "react";
import crowfundLogo from "../assets/images/logo.svg";
import Burger from "./Burger";
import ModalLinks from "./ModalLinks";

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };

  useEffect(() => {
    window.matchMedia("(min-width:768px)").addEventListener("change", (e) => {
      if (e.matches && menuVisible === true) {
        setMenuVisible(false);
      }
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuVisible ? "hidden" : "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [menuVisible]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="section__container flex items-center justify-between py-8 px-8 rounded-full md:px-0">
        <div>
          <img src={crowfundLogo} alt="Crowd Fund Logo" />
        </div>
        <div className="hidden md:block">
          <a href="#" className="text-black md:text-white mr-8">
            About
          </a>
          <a href="#" className="text-black md:text-white mr-8">
            Discover
          </a>
          <a href="#" className="text-black md:text-white">
            Get Started
          </a>
        </div>
        <ModalLinks
          toggleModal={toggleMenu}
          classname={`${
            menuVisible ? "visible opacity-100" : "invisible opacity-0"
          }`}
        />
        <Burger burgerActive={menuVisible} setBurgerActive={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
