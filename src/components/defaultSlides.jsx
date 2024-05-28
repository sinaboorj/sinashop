import React, { useRef, useState, useEffect } from "react";
import '../css/defaultSlide.css'
import def1 from '../image/def1.gif'
import def2 from '../image/def2.jpg'

const DefaultSlides = () => {
    const [defaulfSlids, setDefaulfSlids] = useState([])
    const [slideIndex, setSlideIndex] = useState(0)
    let refTime = useRef(null);
    
    function resetTimeout() {
        if (refTime.current) {
            clearTimeout(refTime.current);
        }
    }

    useEffect(() => {
        setDefaulfSlids([
            { id: 50, pic: def2, model: '2019', status: true },
            { id: 51, pic: def1, model: '2018', status: true }
        ])
    }, [])

    useEffect(() => {
        resetTimeout()
        refTime.current = setTimeout(() => {
            setSlideIndex((index) => index === Object.values(defaulfSlids).length - 1 ? 0 : index + 1)
        }, 4000);
        return () => resetTimeout();
    }, [slideIndex]);
    
    return (
        <div className="d-slides" id="d-slides" >
            {defaulfSlids.map((item, index) => {
                return (
                    <div className={`d-slide${slideIndex === index ? " active" : ""}`} key={index} >
                        <div style={{ backgroundImage: `url(${defaulfSlids[index]?.pic})` }} className="background">
                            <div className="d-dots"  >
                                {defaulfSlids.map((_, dotIndex) => (
                                    <div key={dotIndex} className={`d-dot${slideIndex === dotIndex ? " active" : ""}`} onClick={() => { setSlideIndex(dotIndex); }} ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )

}

 
export default DefaultSlides;

