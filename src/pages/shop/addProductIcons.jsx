import React,{ useContext,useState } from "react";
import { ShopContext } from "./shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const AddProductIcons = (props) => {
    const { id, pic, model, country, description } = props.data
    const { addSlide, removeSlide } = useContext(ShopContext)
    const [productTooltip, setProductTooltip] = useState(false)
    return (
        <>
            <div className="top-in-products">
                {props.isInCart && <span className="isInCart-green" ></span>}
                <div className="info-product-tooltip">
                    <span className="span" onMouseEnter={() => { setProductTooltip(true) }} onMouseLeave={() => { setProductTooltip(false) }}><FontAwesomeIcon icon={faInfoCircle} /></span>
                    {!props.isInSlid && <span  title="Add to slide show" onClick={() => { addSlide(id, pic, model) }}><FontAwesomeIcon icon={faPlusCircle} /></span>}
                    {props.isInSlid && <span title="Remove from slide show" onClick={() => { removeSlide(id) }}><FontAwesomeIcon icon={faMinusCircle} /></span>}
                </div>
            </div>
            {productTooltip && (
                < div className="hint detail-product-tooltip" >
                    <label >Made in: <span >{country}</span></label>
                    <label>Model: <span>{model}</span></label>
                    <label>Description: <span>{description}</span></label>
                </div >
            )}
           
        </>
    );

}
export default AddProductIcons;