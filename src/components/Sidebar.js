import React from 'react';
import altitude from '../Assets/Images/altitude.png';
import beye from '../Assets/Images/bionic-eye.png';
import house from '../Assets/Images/house.png';
import rout from '../Assets/Images/route 1.png';

function Sidebar() {
  return (

<div style={{ backgroundColor: '#232323', padding: '5px', width:'64px' }}>
      <div style={{display: 'flex', flexDirection: 'column',marginLeft: '2px' , paddingLeft:'5px' ,width: '25px', height: '25px'}}>
        <img src={house} alt="House" style={{marginTop: '40px', marginBottom: '28px'}}/>
        <img src={rout} alt="Route" style={{marginBottom: '28px'}}/>
        <img src={beye} alt="Bionic Eye" style={{marginBottom: '28px'}}/>
        <img src={altitude} alt="Altitude" style={{marginBottom: '28px'}} />

      </div>

    </div>
  );
}

export default Sidebar;
