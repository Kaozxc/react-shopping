import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
    const amountOfItems = cartItems.reduce((amount,item) => {
        return amount + item.quantity;
    }, 0);

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
            <li>
                <Link style={navStyle} to="/Home">
                    Home
                </Link>
            </li>
            <li>
                <Link style={navStyle} to="/Shop">
                    Shop
                </Link>
            </li>
            <li>
                <Link style={navStyle} to="/cart">
                    <i className="shopping-cart">
                        {cartItems.length > 0 && (
                            <div className='amount-of-items'>
                                In Shopping Cart:{amountOfItems}
                            </div>
                        )}
                    </i>
                </Link>
             </li>
            </ul>
        </nav>
    )
}

export default Header;