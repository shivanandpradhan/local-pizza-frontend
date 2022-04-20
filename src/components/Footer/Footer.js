import React from 'react';
import playStore from "../../images/playstore.jpg"
import appStore from "../../images/appStore.jpg"
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div id="footer" className="container">
                <div className="left-footer">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and IOS mobile phone</p>
                    <img src={playStore} alt="Play Store" />
                    <img src={appStore} alt="App Store" />
                </div>
                <div className="middle-footer">
                    <div className='title-container'>
                        <h1 className="title">Pizza<img className="pizza-logo-img" src={process.env.PUBLIC_URL + "/pizzaLogo.png"} alt="Pizza" width="45" height="25" />
                        Shop</h1>
                    </div>
                    <h4 className="site-description">
                        Buy and Enjoy Delicious Pizza
                    </h4>
                    <p>Copyright 2022 &copy; Shivanand Pradhan</p>
                </div>
                <div className="right-footer">
                    <h2>Follow Us</h2>
                    <div className="socio-links">
                        <a href="#">Google</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;