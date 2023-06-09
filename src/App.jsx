import logo from "./img/Group.svg";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    console.log("useEffect done");
  }, []);

  return (
    <div className="App">
      <div className={darkMode ? "container" : "container light"}>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo__img" />
            <div className="logo__text">ReactFacts</div>
          </div>
          <div className="toggler">
            <div className="toggler__circle" onClick={toggleDarkMode}></div>
          </div>
        </div>

        <div className="box__facts">
          <h2>Fun facts about React</h2>
          <div className="promo__items">
            <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>
                Powers thousands of enterprise apps, including mobile apps
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
