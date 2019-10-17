import React from "react";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <div className="row">
      <div className="col-md-4 col-left">
        <h4>React Memory</h4>
      </div>
      <div className="col-md-4 col-right">
        <h5>Score: {props.score}</h5>
      </div>
      <div className="col-md-4 col-right">
        <h5>High Score: {props.highScore}</h5>
      </div>
    </div>

  )
}
export default Navbar;
