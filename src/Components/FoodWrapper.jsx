import React,{useState} from "react";
import data from "./data";
import FoodCard from "./FoodCard";
import ShowMore from "./ShowMore";

console.log({ data });
const FoodWrapper = () => {
  let [num,setNum]=useState(2)
  
  return (
    <div>
      {data.map((item, idx) => {
        if(idx<num)
        {
          return (
          <FoodCard
            key={idx}
            mealname={item.strMeal}
            id={item.idMeal}
            category={item.strCategory}
            area={item.strArea}
            tags={item.strTags}
          />
        );
        }
       
        
      })}
      <ShowMore num={num} setNum={setNum}/>
    </div>
  );
};

export default FoodWrapper;
