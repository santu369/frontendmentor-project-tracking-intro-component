import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./app.scss";
import "./common.scss";
import { useState } from "react";

function App() {
  const [menuState, setMenuState] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);

  const toggleNav = (event) => {
    event.stopPropagation();
    if (menuState) {
      setMenuToggled((prevValue) => !prevValue);
    }
    setMenuState((prevValue) => !prevValue);
    if (!menuState && menuToggled) {
      setMenuToggled((prevValue) => !prevValue);
    }
  };

  const checkToToggleNav = (event) => {
    if (
      (menuState && !event.target.classList[0].startsWith("header__nav")) ||
      (menuState && event.target.classList.contains("header__nav-link"))
    ) {
      toggleNav(event);
    }
  };

  return (
    <div className="container-fluid app__container" onClick={checkToToggleNav}>
      <Header
        menuState={menuState}
        menuToggled={menuToggled}
        toggleNav={toggleNav}
      />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
