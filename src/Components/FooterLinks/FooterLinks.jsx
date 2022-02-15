import React from 'react';
import './footerLinks.css';

function FooterLinks() {
    return (
        <div className="footerLinksContainer">
            <ul className='footerLinks'>
                <li className='menuLink'>Terms and Conditions</li>
                <li className='menuLink'>Terms of Use</li>
                <li className='menuLink'>Privacy Notice</li>
                <li className='menuLink'>Cookie Policy</li>
                <li className='menuLink'>Modern Salvery</li>
            </ul>
        </div>
    );
}

export default FooterLinks;
