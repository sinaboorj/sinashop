import { useContext, useState } from "react";
import { ShopContext } from "./shopContext";
import { Products } from "../../data/products";
import ProgressBar from "./progressBar";

const ShowStory = ({ setShowStory }) => {
    const { story } = useContext(ShopContext)
    const [progress, setProgress] = useState(1)

    return (
        <>
            <div className="showStory">
                {Products.map((item, index) => {
                    if (story.find((s) => item.id === s.id && s.show === true))
                        return (
                            <div key={index} >
                                <ProgressBar progress={progress} id={item.id} setProgress={setProgress} setShowStory={setShowStory} />
                                <div className="story-form" >
                                    <img src={item.pic} alt="#" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        )
                })}
            </div>
        </>
    )
      

}
 
export default ShowStory;