import React, { useContext } from "react";
import { ShopContext } from "../shop/shopContext";
import Product from "../shop/product";
import { Products } from "../../data/products";

const Cart = () => {
    const { cartItem } = useContext(ShopContext)
    
    return (
        <>
            <h3 className="div-center" style={{ color: 'green', fontWeight: 'bold' }}>Your Cart Items</h3>
            <div className="products-row">
                {Products?.map((item,index) => {
                    if (cartItem?.some((p) => p.id === item.id && p.count > 0)) return <Product key={index} data={item} />
                })}
            </div>
        </>
       
    );
}
 
export default Cart;


















// {/* <div className="products-row">
//                 {laptop.map((p) => {
//                     if(cartItem.some((item)=> item.id===p.id && item.count> 0))
//                     return <Product data={p} />
//                 })}
//             </div> */}