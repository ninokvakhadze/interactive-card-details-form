import "./App.css";
import cardBack from "./images/bg-card-back.png";
import cardLogo from "./images/card-logo.svg";
import cardFront from "./images/bg-card-front.png";
import Start from "./components/start";
// import Continue from "./components/continue";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card-back-div">
          <img src={cardBack} className="card-back" alt="card-back" />
          <p className="back-card-number">000</p>
        </div>
        <div className="card-front-div">
          <img src={cardFront} className="card-front" alt="front-card" />
          <div className="front-card-components">
            <img src={cardLogo} className="card-logo" alt="card logo" />
            <h3>1234 5678 9123 0000</h3>
            <div className="name-date">
              <p className="name">JANE APPLESEED</p>
              <p className="date">00/00</p>
            </div>
          </div>
        </div>
      </header>
      <Start/>
      {/* <Continue/> */}
    </div>
  );
}

export default App;


