import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';


export const Header: React.FC = () => {
    return (
        <div className="nav">
            <div className="logo"><i className="fas fa-cookie"></i> ReactCart</div>
            <div className="links">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/orders">
                        <li>My Orders</li>
                    </Link>
                    <Link to="/cart">
                        <li>Cart</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}