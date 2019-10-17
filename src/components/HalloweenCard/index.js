import React from "react";
import "./style.css";

const HalloweenCard = props => (
  <div className="card" onClick={() => props.clickPic(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    </div>
  </div>
)

export default HalloweenCard;
