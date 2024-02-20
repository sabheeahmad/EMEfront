import React, { useState } from "react";
import Groupdots from "../Assets/Images/Group 321.png";
import Addbtn from "../Assets/Images/add.png";
import Minusbtn from "../Assets/Images/Group 326.png";

function Notifications() {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`lastNotification1 ${isExpanded ? "expanded" : ""}`}>
      <div>
        <img src={Groupdots} alt="dots" />
      </div>
      <div className="bigGreenbox"></div>
      <div>
        <p className="noti1">Areas of Interest</p>
      </div>
      <div style={{ marginLeft: "4.5vw", maxWidth: "1vw" }}>
        <img
          src={isExpanded ? Minusbtn : Addbtn}
          alt={isExpanded ? "minus" : "plus"}
          onClick={toggleAccordion}
        />
      </div>
      <div
        className="expandedContent"
        style={{ height: isExpanded ? "15vh" : "0" }}
      >
        <div className="cardHead">Name</div>
        <p className="cardText">testing my</p>
        <div className="cardHead">Notes</div>
        <p className="cardText">testing my div</p>
      </div>
    </div>
  );
}

export default Notifications;
