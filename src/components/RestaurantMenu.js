import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5993483&lng=73.762495&restaurantId="+id
    );
    const json = await response.json();
    setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards);
    console.log(restaurantMenu);
    // json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
  }
  return (
    <div className="restaurant-menu">
      <div>
        <h3>Restaurant Id : {id}</h3>
        <img src={IMG_URL + restaurantData.cloudinaryImageId} alt="menu-img" />
        <h4>{restaurantData.name}</h4>
        <p>{restaurantData.areaName}</p>
        <p>{restaurantData.costForTwo}</p>
      </div>
      <div>
        <h3>Menu :</h3>
        {restaurantMenu.map((item)=>{
            return(
                <li key={item.id}>{item.card.info.name}</li>
            )
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
