import logo from "./img/Group.svg"
import logo_promo from "./img/reactjs-icon 2.png"


function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="header">
          <img src={logo} alt="Logo" className="logo__img" />
          <div className="logo__text">ReactFacts</div>
        </div>

        <div className="box__facts">
          <h2>Fun facts about React</h2>
          <div className="promo__items">
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
          </div>
          <img src={logo_promo} alt="Logo" className="promo__img" />

        </div>

      </div>
    </div>
  );
}

export default App;
