import React from 'react';
import darkModeImage from '../Assets/Images/dark_mode.png';
import windowImage from '../Assets/Images/window1.png';
import MenuImage from '../Assets/Images/menu-24px 1.png';

function Header() {
  return (
    <div className='d-flex' style={{ background:"#353535", padding:'10px', justifyContent:'space-between', alignItems:'center', height: '40px' }}>
      <div className='d-flex' style={{ gap:'15px', alignItems:'center' }}>
         <img src={MenuImage} alt="Menu" /> 
        <p className='heading-text'> Echelon <span className='sub-heading'>| Map Editor</span></p>
      </div>

      <div className='d-flex' style={{ paddingRight:'30px', gap:'30px', alignItems:'center' }}>
        <p className='date'>3/31/2023</p>
        <p className='time'>8:07 AM</p>
        <img src={windowImage} alt="Window" />
        <img src={darkModeImage} alt="Dark Mode" />
      </div>
    </div>
  );
}

export default Header;
