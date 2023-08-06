import "./start.css";
import React, { useState } from "react";

function Start() {
  const [cvc, setCvc] = useState("");
  const [cvcVerified, setCvcVerified] = useState(null);

  const [month, setMonth] = useState("");
  const [monthVerified, setMonthVerified] = useState(null);

  const [year, setYear] = useState("");
  const [yearVerified, setYearVerified] = useState(null);

  const [cardNum, setCardNum] = useState("");
  const [cardNumVerified, setCardNumVerified] = useState(null);

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
    setCvcVerified(null);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setMonthVerified(null);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    setYearVerified(null);
  };

  const handleCardNumChange = (e) => {
    setCardNum(e.target.value);
    setCardNumVerified(null);
  };

  
  const handleConfirmClick = () => {
    const cardNumRegex = /^(?:\d{4}\s){3}\d{4}$/;
    if (cardNum === "") {
      setCardNumVerified("");
    } else {
      const iscardNumValid = cardNumRegex.test(cardNum);
      setCardNumVerified(iscardNumValid);
    }

    const cvcRegex = /^\d{3}$/;
    if (cvc === "") {
      setCvcVerified("");
    } else {
      const isCvcValid = cvcRegex.test(cvc);
      setCvcVerified(isCvcValid);
    }

    const monthRegex = /^(0?[1-9]|1[0-2])$/;
    if (month === "") {
      setMonthVerified("");
    } else {
      const isMonthValid = monthRegex.test(month);
      setMonthVerified(isMonthValid);
    }

    const yearRegex = /^\d{2}$/;
    if (year === "") {
      setYearVerified("");
    } else {
      const isYearValid = yearRegex.test(year);
      setYearVerified(isYearValid);
    }
  };
  const cardNumInputStyle = {
    outline: cardNumVerified === false || cardNumVerified === "" ? "1px solid #FF5050" : "none",
  };
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
        <input
          style={cardNumInputStyle}
          id="cardNumInput"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleCardNumChange}
        />
        {cardNumVerified === false && <p className="cvc-error">Wrong format</p>}
        {cardNumVerified === "" && <p className="cvc-error">Can't be blank</p>}
      </div>
      <div className="input-num-div">
        <div className="titles">
          <h2>Exp. Date (MM/YY)</h2>
          <h2>CVC</h2>
        </div>
        <div className="small-inputs">
          <div className="date-div">
            <div className="date-input-div">
              <input
                type="number"
                className="date-input"
                placeholder="MM"
                onChange={handleMonthChange}
              />
              <input
                type="number"
                className="date-input"
                placeholder="YY"
                onChange={handleYearChange}
              />
            </div>
            {monthVerified === false && (
              <p className="cvc-error">2 numbers only</p>
            )}
            {monthVerified === "" && (
              <p className="cvc-error">Can't be blank</p>
            )}
            {yearVerified === false && (
              <p className="cvc-error">2 numbers only</p>
            )}
            {yearVerified === "" && <p className="cvc-error">Can't be blank</p>}
          </div>
          <div className="cvc-div">
            <input
              type="number"
              className="cvc-input"
              placeholder="e.g. 123"
              onChange={handleCvcChange}
            />
            {cvcVerified === false && (
              <p className="cvc-error">3 numbers only</p>
            )}
            {cvcVerified === "" && <p className="cvc-error">Can't be blank</p>}
          </div>
        </div>
      </div>
      <button id="confirm" onClick={handleConfirmClick}>
        Confirm
      </button>
    </div>
  );
}
export default Start;
