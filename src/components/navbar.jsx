import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ShopContext } from "../pages/shop/shopContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    
    const { cartItem } = useContext(ShopContext)
    const cartItemCount = cartItem?.reduce((per, curr) => { return per + curr.count }, 0)
    
    return (
        
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Shop</Link>
                    </li>
                    <li>
                        <Link to='/cart' className="nav-link"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>{cartItemCount >= 1 && <span className="cartItemCount">{cartItemCount}</span>} </Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li>
                        <Link to='/about' className="nav-link">About </Link>
                    </li>
                </ul>
               
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/users' className="nav-link">Users </Link>
                    </li>
                  
                    <li className="nav-item">
                        <Link to='/login' className="nav-link">Login </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;