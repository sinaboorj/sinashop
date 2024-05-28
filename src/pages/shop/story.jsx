import { useContext,  } from "react";
import { ShopContext } from "./shopContext";
import { Products } from "../../data/products";
import '../../css/story.css'

const Story = ({ setShowStory }) => {
  const { story, setStory } = useContext(ShopContext)
  return (
    <>
      <div className="stories">
        {story?.map((item, index) => {
          return (
            <div className="white-border-story" key={index}>
              <div onClick={() => { chechStoryFalse(item.id) }} style={{ backgroundImage: `url(${Products[index].pic})`, border: item.story === true ? 'solid 3px red' : 'solid 3px rgb(183, 136, 136)' }} className="story"></div>
            </div>
          )
        })}
      </div>
    </>
  );

  function chechStoryFalse(id) {
    const isStoryTrue = story?.some((item) => item.id === id && item.story === true)
    if (isStoryTrue) {
      setShowStory(true)
      setStory(story?.map((item) => {
        if (item.id === id && item.story === true) return { ...item, story: item.story = false, show: item.show = true }
        else return item
      }))

    }
  }

}
export default Story;