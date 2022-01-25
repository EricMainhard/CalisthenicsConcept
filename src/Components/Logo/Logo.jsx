import React from 'react';
import './logo.css';

export default function Logo() {
  return <div className='logo'>
      <img className='mobile_logo' src='/img/logo.png' alt='Calisthenics Concept'/>
      <img className='desktop_logo' src='/img/fullLogo.png' alt='Calisthenics Concept'/>
  </div>;
}
