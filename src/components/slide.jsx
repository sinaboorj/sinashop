
// import '../css/s.css';
// import { useState, useRef, useEffect, useContext } from 'react';
// import { ShopContext } from '../pages/shop/shopContext';
    
// const Slide = () => {
//     const { slideShow } = useContext(ShopContext)
//     const [index, setIndex] = useState(0);
//     const timeoutRef = useRef(null);
    
//     function resetTimeout() {
//         if (timeoutRef.current) {
//             clearTimeout(timeoutRef.current);
//         }
//     }
    
//     useEffect(() => {
//         resetTimeout();
//         timeoutRef.current = setTimeout( () =>
//                 setIndex((index) =>  index === Object.values(slideShow).length - 1 ? 0 : index + 1
//                 ),5000
//         );
    
//         return () => resetTimeout();
      
//     }, [index]);
    
//     return (
//         <div className="slideshow">
//             <div className="slideshowSlider" style={{ transform: `translate3d(${index * 100}%, 0, 0)` }} >
//                 {Object.values(slideShow).map((item, index) => {
//                     return (
//                         <div className='slide' key={index} >
//                             <img src={slideShow[index]?.pic} alt="" />
//                             <div className="slide-text"><label>Model: <span>{item.model}</span></label> </div>
//                         </div>
//                     )})}
//             </div>
    
//             <div className="Dots">
//                 {colors.map((_, dotIndex) => (
//                     <div key={dotIndex} className={`Dot${index === dotIndex ? " active" : ""}`} onClick={() => { setIndex(dotIndex); }} ></div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// export default Slide;

