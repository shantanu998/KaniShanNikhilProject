import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css'

function LandingPage(){
    return (
        <div>
            <div className = 'banner-container'>
                <div className='landing-text'>
                    <br></br>
                    <h1>OneShop</h1>
                    <p style={{fontSize:"20px"}}>Your one stop shop for mobile phones
                    <br></br>Avail exciting offers on your first purchase</p>
                    <Link to="/firstPage/" className="nav-text" style={{textDecoration:'none'}}>
                        <button className='shop-btn' >Buy Now</button>
                    </Link>    
                </div>
                <div className='landing-photo'>
                    <img className='offers-img' src = 'https://i0.wp.com/techtrendske.co.ke/wp-content/uploads/2019/08/samsung-galaxy-a30s-specs-kenya.png?fit=998%2C686&ssl=1' alt='offers'></img>
                    {/* <img className='offers-img' src="https://imagicbaroda.com/wp-content/uploads/2018/11/iphone-xr-banner-image-2.png" alt='offers'></img> */}
                </div>
            </div>
            <div className='bottom-bar'>
                <p className='foot-text'>Deutsche Telekom Digital Labs | Follow us on </p>
                <img className='links' src='https://www.locococos.com/testsample/wp-content/uploads/2018/02/social-media-icons-2.png' alt='links'></img>
            </div>
        </div>
    )
}

export default LandingPage;