import React from 'react';
import './landingPage.css'

function LandingPage(){
    return (
        <div className = 'banner-container'>
        <div className='landing-text'>
            <br></br>
            <h1>OneShop</h1>
            <p style={{fontSize:"20px"}}>Your one stop shop for mobile phones
            <br></br>*avail exciting offers on your first purchase*</p>
            <button className='shop-btn' >Know More</button>
           
        </div>
        <div className='landing-photo'>
            <img className='offers-img' src="https://imagicbaroda.com/wp-content/uploads/2018/11/iphone-xr-banner-image-2.png" alt='offers'></img>
        </div>
    </div>
    )
}

export default LandingPage;