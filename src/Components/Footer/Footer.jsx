import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className="footerRrss">
          <img src="/img/facebook.png" className="rrssIcon" alt="facebook"/>
          <img src="/img/instagram.png" className="rrssIcon" alt="instagram"/>
          <img src="/img/twitter.png" className="rrssIcon" alt="twitter"/>
        </div>
        <div className="footerLinksContainer">
          <ul className='footerLinks'>
            <li>Terms and Conditions</li>
            <li>Terms of Use</li>
            <li>Privacy Notice</li>
            <li>Cookie Policy</li>
            <li>Modern Salvery</li>
          </ul>
        </div>
        <div className="footerCards">
          <img src="/img/amazon-pay.png" className='rrssIcon' alt="Amazon Pay" />
          <img src="/img/american-express.png" className='rrssIcon' alt="American Express" />
          <img src="/img/google-pay.png" className='rrssIcon' alt="Google Pay" />
          <img src="/img/visa.png" className='rrssIcon' alt="Visa" />
        </div>
        <div className="footerCredits">
            <p>
            &#169; | Calishtenics Concept | All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer