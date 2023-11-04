import React from 'react'

function Header() {
  return (
    <div className='bar'>
        <img className='logo' src='xiotz-get-secured.svg'>
        </img>
        <div className='bartext'>
            <div>xIoTz Multi-Utility Dashboard</div>
            <div className='headersubtext'><div className='subtt'> <img className='logoh' src='/calendar.png'></img>&nbsp;&nbsp;27th Oct, 2023 | 10:00 AM - 29th Oct, 2023 | 06:00 PM </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className='subtt'>
            &nbsp;&nbsp;
            <img className='logoh' src='location.png'></img>&nbsp;&nbsp; Pragati Maidan, New Delhi, India
                </div></div>
        </div>
    </div>
  )
}

export default Header