import { useParams } from "react-router-dom";
import { useContext,useEffect,useState } from "react";
import { ShopContext } from "./shopContext";
import Product from "./product";
import { Products } from "../../data/products";

const ProductDetail = () => {
    const { id } = useParams()
    const { cartItem, addToBasket, removeFromBasket, category } = useContext(ShopContext)
    const isInCart = cartItem?.some((item) => item.id === parseInt(id.slice(7)) && item.count >= 1)
  
    const [productDetail, setProductDetail] = useState('')
    const itemId=parseInt(id.slice(7))
    useEffect(() => {
        try {
            setProductDetail(Products?.find((item) => item.id === itemId))
        } catch (error) {
            setProductDetail('')
        }
    }, [id])

    if (productDetail !== undefined) {
        const { pic, name, price, model, country, description } = productDetail
        return (
            <>
                <div className="detail">
                    <div className="products-detail" >
                        <div style={{ background: isInCart ? 'green' : 'white', color: 'white', height: '30px', width: '100%', textAlign: 'center' }}>Selected</div>
                        <img src={pic} alt="" width={'250px'} height={'200px'} style={{ padding: '5px' }} />
                        <h4>{name}</h4>
                        <h6>{price} $</h6>
                        <div className="btn-row">
                            {isInCart && <button className="normal btnn" onClick={() => { removeFromBasket(productDetail.id) }} >-</button>}
                            {isInCart && <span className="mx-1">{cartItem?.filter((item) => item.id == itemId)[0]?.count}</span>}
                            <button className="normal btnn" onClick={() => { addToBasket(productDetail.id) }}>+</button>
                        </div>
                    </div>
                    <div className="more-description">
                        <label >Made in: <span >{country}</span></label>
                        <label>Model: <span>{model}</span></label>
                        <label>Description: <span>{description}</span></label>
                    </div>
                </div>
                <div className="products-row">
                    {Products.map((item) => {
                        if (category === 'all-products') return (<>{window.scrollTo({top:0,behavior:"smooth"})} <Product key={item.id} data={item} /> </>)
                        if (item.category === category) return  (<>{window.scrollTo({top:0,behavior:"smooth"})} <Product key={item.id} data={item} /> </>)
                    })}
                </div>
            </>
        );
    }
    else return <h5>Product Not Found</h5>
}
 
export default ProductDetail;