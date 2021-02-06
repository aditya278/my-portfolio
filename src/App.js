import './App.scss';
import React, {useState} from "react";
import Navbar from "./Components/Navbar";

import Routing from "./Routing.js";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  }

  return (
    <div className="App">
      <div className={`sidebar${navToggle ? ' nav-toggle' : ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Routing />
        </div>
      </div>
    </div>
  );
}

export default App;