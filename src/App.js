import "./App.css";
import React, { useState } from "react";
import cardBack from "./images/bg-card-back.png";
import cardLogo from "./images/card-logo.svg";
import cardFront from "./images/bg-card-front.png";
import Continue from "./components/continue";


function App() {
  const [name, setName] = useState("");
  const [nameVerified, setNameVerified] = useState(null);
  const [nameText, setNameText] = useState("JANE APPLESEED");

  const [cardNum, setCardNum] = useState("");
  const [cardNumVerified, setCardNumVerified] = useState(null);
  const [cardText, setCardText] = useState("0000 0000 0000 0000");

  const [month, setMonth] = useState("");
  const [monthVerified, setMonthVerified] = useState(null);
  const [monthText, setMonthText] = useState("00");

  const [year, setYear] = useState("");
  const [yearVerified, setYearVerified] = useState(null);
  const [yearText, setYearText] = useState("00")

  const [cvc, setCvc] = useState("");
  const [cvcVerified, setCvcVerified] = useState(null);
  const [cvcText, setCvcText] = useState("000")

  const [showCard, setShowCard] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameVerified(null);
  };

  const handleCardNumChange = async (e) => {
    if (e.target.value.length === 4) {
      e.target.value += " ";
    } else if (e.target.value.length === 9) {
      e.target.value += " ";
    } else if (e.target.value.length === 14) {
      e.target.value += " ";
    }
    setCardNum(e.target.value);
    setCardNumVerified(null);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setMonthVerified(null);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    setYearVerified(null);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
    setCvcVerified(null);
  };

  const handleConfirmClick = () => {
    const nameRegex = /^(?![\d\s])[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;
    const isNameValid = nameRegex.test(name);
    if (name === "") {
      setNameVerified("");
    } else {
      setNameVerified(isNameValid);
    }

    const cardNumRegex = /^(?:\d{4}\s){3}\d{4}$/;
    const iscardNumValid = cardNumRegex.test(cardNum);
    if (cardNum === "") {
      setCardNumVerified("");
    } else {
      setCardNumVerified(iscardNumValid);
    }
    const monthRegex = /^(0?[1-9]|1[0-2])$/;
    const isMonthValid = monthRegex.test(month);
    const monthWithOneNum =  "0" + month ;
    if (month === "") {
      setMonthVerified("");
    } else if (month < 1 || month > 12) {
      setMonthVerified("month");
    } else {
      setMonthVerified(isMonthValid);
    }

    const yearRegex = /^(?:2[3-9]|[3-9]\d)$/;
    const isYearValid = yearRegex.test(year);
    if (year === "") {
      setYearVerified("");
    } else if (year < 23) {
      setYearVerified("year");
    } else {
      setYearVerified(isYearValid);
    }

    const cvcRegex = /^\d{3}$/;
    const isCvcValid = cvcRegex.test(cvc);
    if (cvc === "") {
      setCvcVerified("");
    } else {
      setCvcVerified(isCvcValid);
    }

    if (
      isNameValid &&
      iscardNumValid &&
      isMonthValid &&
      isYearValid &&
      isCvcValid
    ) {
      setShowCard(false);
      setNameText(name.toLocaleUpperCase());
      setCardText(cardNum);
      if(month.length < 2){
        setMonthText(monthWithOneNum)
      }
      else{
        setMonthText(month);
      }
      setYearText(year);
      setCvcText(cvc)
    }
  };

  const nameInputStyle = {
    border:
      nameVerified === false || nameVerified === "" ? "1px solid #FF5050" : "",
  };

  const cardNumInputStyle = {
    border:
      cardNumVerified === false || cardNumVerified === ""
        ? "1px solid #FF5050"
        : "",
  };

  const yearnputStyle = {
    border:
      yearVerified === false || yearVerified === "" || yearVerified === "year"
        ? "1px solid #FF5050"
        : "",
  };
  const monthnputStyle = {
    border:
      monthVerified === false ||
      monthVerified === "" ||
      monthVerified === "month"
        ? "1px solid #FF5050"
        : "",
  };
  const cvcInputStyle = {
    border:
      monthVerified === false ||
      monthVerified === "" ||
      monthVerified === "month"
        ? "1px solid #FF5050"
        : "",
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="card-back-div">
          <img src={cardBack} className="card-back" alt="card-back" />
          <p className="back-card-number">{cvcText}</p>
        </div>
        <div className="card-front-div">
          <img src={cardFront} className="card-front" alt="front-card" />
          <div className="front-card-components">
            <img src={cardLogo} className="card-logo" alt="card logo" />
            <h3>{cardText}</h3>
            <div className="name-date">
              <p className="name">{nameText}</p>
              <p className="date">{monthText}/{yearText}</p>
            </div>
          </div>
        </div>
      </header>
      <div className={showCard ? "information" : "information remove"}>
        <div className="name-div">
          <h2>Cardholder Name</h2>
          <input
            style={nameInputStyle}
            onChange={handleNameChange}
            type="text"
            className="name-input"
            placeholder="e.g. Jane Appleseed"
          />
          {nameVerified === false && <p className="error">Wrong</p>}
          {nameVerified === "" && <p className="error">Can't be blank</p>}
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
          {cardNumVerified === false && <p className="error">Wrong format</p>}
          {cardNumVerified === "" && <p className="error">Can't be blank</p>}
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
                  style={monthnputStyle}
                  type="number"
                  className="date-input"
                  placeholder="MM"
                  onChange={handleMonthChange}
                />
                <input
                  style={yearnputStyle}
                  type="number"
                  className="date-input"
                  placeholder="YY"
                  onChange={handleYearChange}
                />
              </div>
              {monthVerified === false && (
                <p className="error">2 numbers only</p>
              )}
              {monthVerified === "" && <p className="error">Can't be blank</p>}
              {monthVerified === "month" && (
                <p className="error">Wrong month</p>
              )}
              {yearVerified === false && (
                <p className="error year-error">2 numbers only</p>
              )}
              {yearVerified === "" && <p className="error">Can't be blank</p>}
              {yearVerified === "year" && <p className="error">Wrong year</p>}
            </div>
            <div className="cvc-div">
              <input
                style={cvcInputStyle}
                type="number"
                className="cvc-input"
                placeholder="e.g. 123"
                onChange={handleCvcChange}
              />
              {cvcVerified === false && <p className="error">3 numbers only</p>}
              {cvcVerified === "" && <p className="error">Can't be blank</p>}
            </div>
          </div>
        </div>
        <button id="confirm" onClick={handleConfirmClick}>
          Confirm
        </button>
      </div>
      {showCard === false && <Continue/>}
    </div>
  );
}

export default App;


