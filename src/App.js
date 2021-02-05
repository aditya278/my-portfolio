import './App.scss';

import Navbar from "./Components/Navbar";

import Routing from "./Routing.js";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
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