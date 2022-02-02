import React from 'react';
import './homebanner.css';
import { Link } from 'react-router-dom';

export default function HomeBanner() {
  return (
    <section className='homeBanner'>
        <div className="homeBannerContent">
          <div className="homeBannerTitle">
            CALISTHENICS CONCEPT
          </div>
          <div className="homeBannerText">
            The future of street workout
          </div>
          <div className="homeBannerCta">
            <Link to="/products">SHOP</Link>
          </div>
        </div>
    </section>
  );
}
