import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import "./Navbar.css"
import { useSelector } from 'react-redux';
function Navbar({width}) {

    const { cartItems } = useSelector(state => state.cart)

    return (
        <>
            <nav  id="navbar" className='navbar-container'>
                <div className='left-navbar-item-container'>                    
                    <h1>Pizza<img src={process.env.PUBLIC_URL + "/pizzaLogo.png"} alt="Pizza"/>Shop</h1>
                </div>
                <div className='middle-navbar-item-container'>
                    <ul>
                        <li><NavLink to = "/"> HOME </NavLink></li>
                        <li><a href="#banner"> MENU </a></li>
                        <li><a href="#footer"> ABOUT </a></li>
                        <li><a href="#footer"> STORES </a></li>
                        <li><a href="#footer"> CONTACT </a></li>
                    </ul>
                </div>
                <div className='right-navbar-item-container'>
                    <div className="cart-icon-container">
                        {cartItems && (<div>
                            <NavLink to = '/cart'><ShoppingCartIcon fontSize={width < 800 ? 'small' : 'large'}/>
                            {cartItems.length > 0 ? <p>{cartItems.reduce((acc, i) => acc + i.quantity, 0)}</p> : ""}
                            </NavLink>
                        </div>)}
                    </div>
                    <div><button className='btn-login'>LOGIN</button></div>
                    <div><button className='btn-signup'>SIGNUP</button></div>                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;