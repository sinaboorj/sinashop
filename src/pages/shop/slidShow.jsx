import React,{ useRef,useContext, useState, useEffect } from "react";
import { ShopContext } from "./shopContext";
import '../../css/slidShow.css';
import image1 from '../../image/image1.jpg'
import image2 from '../../image/image2.jpg'

const SlideShow = () => {
    const { slideShow, defualfSlides, addSlide } = useContext(ShopContext)
    const [currentSlide, setCurrentSlide] = useState(0)
    let refTime = useRef(null);
    
    function resetTimeout() {
        if (refTime.current) {
            clearTimeout(refTime.current);
        }
    }

    useEffect(() => {
        defualfSlides && addSlide()
    }, [])
    
    useEffect(() => {
        resetTimeout()
        refTime.current = setTimeout(() => {
            setCurrentSlide((index) => index === Object.values(slideShow).length - 1 ? 0 : index + 1)
        }, 4000);
        return () => resetTimeout();
    }, [currentSlide,slideShow]);
    
    return (
        <>
            <div className="image-slide">
                <div style={{ backgroundImage: `url(${image1})` }} className="image"></div>
                <div className="slides" id="slides" >
                    {slideShow.map((item, index) => {
                        return (
                            <div className={`slide${currentSlide === index ? " active" : ""}`} key={index} >
                                <img src={slideShow[index]?.pic} alt="" />
                                <div className="slide-text"><label>Model: <span>{item.model}</span></label> </div>
                            </div>
                        )
                    })}
                    <div className="dots"  >
                        {slideShow.map((_, dotIndex) => (
                            <div key={dotIndex} className={`dot${currentSlide === dotIndex ? " active" : ""}`} onClick={() => { setCurrentSlide(dotIndex); }} ></div>
                        ))}
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${image2})` }} className="image"></div>
            </div>
        </>
    )

}

 
export default SlideShow;

