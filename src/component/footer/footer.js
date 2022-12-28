import React from 'react'
import Footerimgh from "./logo-footer.png";
 import './footer.css';

function footer() {
  return (
    <div className='footer-container'>
      <div className='footer-media-1025px'>
      <div className='footer-logo'>
      <img src={Footerimgh} alt='some'/>
      </div>
      <div className='footer-copy'>
        <a href='www.google.com' className='footer-copy-link'> Copyright © 2022 Micro-Star INT'L CO., LTD. All rights reserved.</a>
      </div>
      </div>
      <div className='footer-ul-con'>
        <ul className='footer-ul'>
            <li className='footer-li'>Cookie Policy</li>
            <li className='footer-li'>Privacy Policy</li>
            <li className='footer-li'>Terms of Use</li>
            <li className='footer-li'>Contact Us</li>
            <li className='footer-world'><img width="16" height="16" className='PublicIcon' src="https://www.msi.com/images/front/global.png" alt="msi icon"/>Global / English</li>
        </ul>
      </div>
     </div>
  )
}

export default footer;

