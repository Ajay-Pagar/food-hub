import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, [getRestaurantData]);

  async function getRestaurantData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" +
        id
    );
    const json = await response.json();
    setRestaurantData(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    // json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
  }

  const dispatch = useDispatch();

  const handleAddItem = (info) => {
    dispatch(addItem(info)); // payload : info
  };
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
        <ul data-testid="menu">
          {restaurantMenu.map((item) => {
            const {
              card: { info },
            } = item;
            // console.log(info);
            return (
              <li key={item.card.info.id}>
                {item.card.info.name}
                <button
                  data-testid="addBtn"
                  onClick={() => handleAddItem(info)}
                >
                  Add
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
