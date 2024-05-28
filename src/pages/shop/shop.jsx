import React, { useContext,useState} from "react";
import { Products } from "../../data/products";
import Product from "./product";
import { ShopContext } from "./shopContext";
import NavigationBar from "../../components/navigationBar";
import SlideShow from "./slidShow";
import DefaultSlides from "../../components/defaultSlides";
import Story from "./story";
import ShowStory from "./showStory";

const Shop = () => {
  const { category } = useContext(ShopContext)
  const [showStory, setShowStory] = useState(false)

  return (
    <>
      {!showStory && <Story setShowStory={ setShowStory} />}
      {showStory && <ShowStory setShowStory={ setShowStory}  />}
      <DefaultSlides />
      <SlideShow  />
      <NavigationBar />
      <div className="products-row">
        {Products.map((item) => {
          if (category === 'all-products') return <Product key={item.id} data={item} />
          if (item.category === category) return <Product key={item.id} data={item} />
        })}
      </div>
    </>
  );
}
 
export default Shop;