import React from 'react';
import './footerCards.css';

function FooterCards() {
    return(
        <div className="footerCards">
            <img src="/img/amazon-pay.png" className='cardIcon' alt="Amazon Pay" />
            <img src="/img/american-express.png" className='cardIcon' alt="American Express" />
            <img src="/img/google-pay.png" className='cardIcon' alt="Google Pay" />
            <img src="/img/visa.png" className='cardIcon' alt="Visa" />
        </div>
        );
}

export default FooterCards;
