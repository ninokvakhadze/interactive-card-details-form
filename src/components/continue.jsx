import "./continue.css";
import complete from "../images/icon-complete.svg"

function Continue(){
    return(
        <div className="continue-div">
          <img src={complete} alt="complete"  className="complete"/>
        </div>
    )
}

export default Continue;