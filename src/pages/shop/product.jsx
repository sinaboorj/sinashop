import { useContext } from "react";
import { ShopContext } from "./shopContext";
import { Link } from "react-router-dom";
import AddProductIcons from "./addProductIcons";


const Product = (props) => {
    const { id, name, price, pic } = props.data
    const { cartItem, addToBasket, removeFromBasket, slideShow  } = useContext(ShopContext)
   
    const isInCart = cartItem?.some((item) => item.id === id && item.count >= 1)
    const isInSlid = slideShow?.some((item) => item.id === id && item.status === true)
    return (
        <div className="products">
            <AddProductIcons data={props.data} isInCart={isInCart} isInSlid={isInSlid} />
            <Link to={`/shop/product${id}`} ><img src={pic} alt="" width={'150px'} height={'120px'} /></Link>
            <h4>{name}</h4>
            <h6>{price} $</h6>
            <div className="btn-row">
                {isInCart && <button className="normal btnn" onClick={() => { removeFromBasket(id) }} >-</button>}
                {isInCart && <span className="mx-1">{cartItem?.filter((item) => item.id === id)[0]?.count}</span>}
                <button className="normal btnn" onClick={() => { addToBasket(id) }}>+</button>
            </div>
        </div>
    );
}
 
export default Product;


