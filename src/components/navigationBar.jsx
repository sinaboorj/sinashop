import React,{ useContext } from "react";
import { ShopContext } from "../pages/shop/shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { faParking } from "@fortawesome/free-solid-svg-icons";

import '../css/Navigation.css';

const NavigationBar = () => {
    const { setCategory } = useContext(ShopContext)
    return (
        <>

            <br />
            <div className="Navigation">
                <nav className="warp-tabs">
                    <ul className="tabs-Navigation">
                        <li data-content="all-products" onClick={() => { setCategory('all-products') }}><span>All Products <FontAwesomeIcon icon={faParking} /></span></li>
                        <li data-content="mobile" onClick={() => { setCategory('mobile') }}><span>Mobile <FontAwesomeIcon icon={faMobileAlt} /></span></li>
                        <li data-content="laptop" onClick={() => { setCategory('laptop') }}><span>Laptop <FontAwesomeIcon icon={faLaptop} /></span></li>
                        <li data-content="camera" onClick={() => { setCategory('camera') }}><span>Camera <FontAwesomeIcon icon={faCamera} /></span></li>
                        <li data-content="sunglass" onClick={() => { setCategory('sunglass') }}><span>Sunglass <FontAwesomeIcon icon={faGlasses} /></span></li>
                    </ul>
                </nav>
            </div>
        </>
    );

}
 
export default NavigationBar;