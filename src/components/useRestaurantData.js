import { useState,useEffect } from "react";

export const useRestaurantData = (id) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5993483&lng=73.762495&restaurantId=" +
        id
    );
    const json = await response.json();
    setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card
        .card.itemCards
    );
    console.log(restaurantMenu);
    // json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
  }
  return restaurantData, restaurantMenu;
};
