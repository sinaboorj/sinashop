import React, { createContext, useState, useEffect } from "react";
import def1 from '../../image/def3.jpg'
import def2 from '../../image/def4.jpg'
import { Products } from "../../data/products";

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState() // {id ,count}
    const [category, setCategory] = useState(null)
    const [slideShow, setSlideShow] = useState([])
    const [defualfSlides, setDefualfSlides] = useState(true)
    const [story, setStory] = useState([])
   

    const addToBasket = (itemId) => {
        if (!cartItem?.find((item) => item.id === itemId))
            setCartItem([...cartItem, { id: itemId, count: 1 }])
        else
            setCartItem(cartItem?.map((item) => {
                if (item.id === itemId) return { ...item, count: item.count + 1 }
                else return item
            }))
    }

    const removeFromBasket = (itemId) => {
        const temp = (cartItem?.map((item) => {
            if (item.id === itemId) return { ...item, count: item.count === 0 ? 0 : item.count - 1 }
            else return item
        }))
        setCartItem(temp.filter((item) => item.count > 0))
    }

    const addSlide = (itemId, pic, model) => {
        if (defualfSlides === false)
            if (!slideShow?.find((item) => item.id === itemId)) setSlideShow([...slideShow, { id: itemId, pic: pic, model: model, status: true }])
        if (defualfSlides === true) { setSlideShow([{ id: 50, pic: def1, model: '2019', status: true }, { id: 51, pic: def2, model: '2023', status: true }]); setDefualfSlides(false) }
    }
    const removeSlide = (itemId) => {
        setSlideShow(slideShow?.filter((item) => item.id !== itemId))
    }

    useEffect(() => {
        const data = localStorage.getItem('loaclCartItemCount')
        setCartItem(JSON.parse(data) ?? [])

        const categoryVeiw = localStorage.getItem('categoryVeiw')
        setCategory(JSON.parse(categoryVeiw) ?? 'all-products')

        const historyStory = localStorage.getItem('story')
        if (JSON.parse(historyStory) === null || JSON.parse(historyStory) === undefined) {
            const temp = [] //Add stories for the first time
            Products.map((item, index) => temp.push({ id: item.id, story: true, show: false }))
            setStory(temp)  
        }else setStory(JSON.parse(historyStory))

    }, [])

    useEffect(() => {
        if (cartItem !== undefined)
            localStorage.setItem('loaclCartItemCount', JSON.stringify(cartItem))

        if (category !== null)
            localStorage.setItem('categoryVeiw', JSON.stringify(category))

        if (story !== null)
        localStorage.setItem('story', JSON.stringify(story))
        
    }, [cartItem, category,story])
    
    const shopContextValue = {
        cartItem, category, setCategory, addToBasket, removeFromBasket, addSlide, slideShow,
        removeSlide, defualfSlides, setDefualfSlides, story, setStory,
    }
    return <ShopContext.Provider value={shopContextValue}>{props.children} </ShopContext.Provider>
}
 
export default ShopContextProvider;

