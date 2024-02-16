import React from 'react'
import Groupdots from "../Assets/Images/Group 321.png";
import Addbtn from '../Assets/Images/add.png';

function notifications() {
  return (
    <div>
        <div className="lastNotification1">
          <div>
          <img src={Groupdots} alt="dots" /> 
          </div>
          <div className="bigGreenbox"></div>
          <div> <p className="noti1">Areas of Interest</p></div>
          <div> <img src={Addbtn} alt="plus" style={{ marginLeft: '92px' }}/> </div>
        </div>


        <div className="lastNotification2">
        <div>
          <img src={Groupdots} alt="dots" /> 
          </div>
          <div className="bigPurplebox"></div>
          <div> <p className="noti2">Traffic Zone I-66 Crossroads</p></div>
          <div> <img src={Addbtn} alt="plus" style={{ marginLeft: '26px'}}/> </div>
        </div>
       
       
        <div className="lastNotification3">
        <div>
          <img src={Groupdots} alt="dots" /> 
          </div>
          <div className="bigBluebox"></div>
          <div> <p className="noti3">No Fly Zone</p></div>
          <div> <img src={Addbtn} alt="plus" style={{ marginLeft: '6vw' }}/> </div>
        </div>
    </div>
  )
}

export default notifications