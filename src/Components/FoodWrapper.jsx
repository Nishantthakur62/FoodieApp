import React,{useState} from "react";
import data from "./data";
import FoodCard from "./FoodCard";
import ShowMore from "./ShowMore";
import NavBar from "./NavBar";

// console.log({ data});
const FoodWrapper = () => {
  let [num,setNum]=useState(2)
  let [favFoodList,setFavFoodList]=useState([])
  let [toggle,setToggle]=useState(true)
  let [items,setItems]=useState(data)

  return (
    <div>
      <NavBar setItems={setItems} toggle={toggle} setToggle={setToggle}  favFoodList={favFoodList}/>
      
      {items.map((item, idx) => {
        if(idx<num)
        {
          return (
          <FoodCard
            toggle={toggle}
            key={idx}
            mealname={item.strMeal}
            id={item.idMeal}
            category={item.strCategory}
            area={item.strArea}
            tags={item.strTags}
            setFavFoodList={setFavFoodList}
            favFoodList={favFoodList}
            price={item.price}
            fav={item.fav}
          />
        );
        }
       
        
      })}
      <ShowMore num={num} setNum={setNum}/>
    </div>
  );
};

export default FoodWrapper;
