import "./start.css";
function Start() {
    return (
      <div className="information">
        <div className="name-div">
          <h2>Cardholder Name</h2>
          <input
            type="text"
            className="name-input"
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="name-div">
          <h2>Card Number</h2>
          <input type="number" placeholder="e.g. 1234 5678 9123 0000" />
        </div>
        <div className="input-num-div">
          <div className="titles">
            <h2>Exp. Date (MM/YY)</h2>
            <h2>CVC</h2>
          </div>
          <div className="small-inputs">
            <div className="date-input-div">
              <input type="number" className="date-input" placeholder="MM" />
              <input type="number" className="date-input" placeholder="YY" />
            </div>
            <input type="number" className="cvc-input" placeholder="e.g. 123" />
          </div>
        </div>
        <button id="confirm">Confirm</button>
      </div>
    );
  }

  export default Start;