import "./continue.css";
import complete from "../images/icon-complete.svg"

function Continue(){
    return(
        <div className="continue-div">
          <img src={complete} alt="complete"  className="complete"/>
          <h1>THANK YOU!</h1>
          <h4>We’ve added your card details</h4>
          <button>Continue</button>
        </div>
    )
}

export default Continue;