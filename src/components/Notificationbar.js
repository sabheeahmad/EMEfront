import React from "react";
import frame from "../Assets/Images/Frame 29.png";
import Searchbar from "./searchbar";
import Groupdots from "../Assets/Images/Group 321.png";
import Addbtn from "../Assets/Images/add.png";
import Noti from "./notifications";

function Notification() {
  return (
    <div
      style={{
        background: "#212222",
        width: "24vw",
        borderLeft: "2px solid #212222",
        borderRadius: "10px 0 0 10px",
      }}
    >
      <div
        className="d-flex"
        style={{ paddingTop: "20px", justifyContent: "space-between" }}
      >
        <p className="map-editor">Map Editor</p>
        <img
          src={frame}
          alt="Dark Mode"
          style={{
            height: "24px",
            width: "24px",
            marginTop: "8px",
            marginRight: "4px",
          }}
        />
      </div>
      <Searchbar />
      <div className="display">
        <img src={Groupdots} alt="dots" />
        <p className="visible">Visibility</p>
      </div>

      <div className="borderDiv">
        <div className="linebyline">
          <div className="bluecolorbox"></div>
          <div>
            <p className="areaName1"> No Fly Zone</p>
          </div>
        </div>
        <div className="linebyline">
          <div className="redcolorbox"></div>
          <div>
            <p className="areaName2"> Area of Interest</p>
          </div>
        </div>
        <div className="linebyline">
          <div className="greencolorbox"></div>
          <div>
            <p className="areaName3"> Traffic Zone</p>
          </div>
        </div>
        <div className="linebyline">
          <div className="purplecolorbox"></div>
          <div className="areaName4">
            <p> High Crime Zone</p>
          </div>
        </div>
      </div>

      <div className="geoZo">
        <p className="geoZone">Geo Zones</p>

        <div className="zoneInside">
          <img src={Addbtn} alt="plus" />
          <p className="addZonbtn">Add Zone</p>
        </div>
      </div>

      <div className="openNotification1">
        <div className="colorText">
          <img src={Groupdots} alt="dots" />
        </div>
        <div></div>
        <div></div>
      </div>

      <div className="openNotification2">
        <div className="colorText">
          <img src={Groupdots} alt="dots" />
        </div>
        <div></div>
        <div></div>
      </div>

      <Noti />
    </div>
  );
}

export default Notification;
