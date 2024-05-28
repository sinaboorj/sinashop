import { useContext } from "react";
import { ShopContext } from "./shopContext";

const ProgressBar = ({ progress, id, setProgress ,setShowStory}) => {
    const { story, setStory } = useContext(ShopContext)
    return (
        <>
            {
                progress < 100
                    ?
                    <progress className="progress" onClick={progressCount(progress + 1)} value={`${progress}`} max={100} > </progress >
                    :
                    chechStoryFalse(id)
            }
        </>
    )

    function progressCount(progress) {
        setTimeout(() => {
            setProgress(() => {
                return progress
            })
         
        }, 80)
       
    }

    function chechStoryFalse(id) {
        setShowStory(false)
        setStory(story?.map((item) => {
            if (item.id === id && item.show === true) return { ...item, show: item.show = false }
            else return item
        }))
    }
    
    
}
 
export default ProgressBar;
