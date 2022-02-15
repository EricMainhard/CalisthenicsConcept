import React from 'react'
import FooterCards from '../FooterCards/FooterCards';
import FooterLinks from '../FooterLinks/FooterLinks';
import FooterRrss from '../FooterRrss/FooterRrss';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
        <FooterRrss/>
        <FooterLinks/>
        <FooterCards/>
        <div className="footerCredits">
            <p>
            &#169; | Calishtenics Concept | All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer