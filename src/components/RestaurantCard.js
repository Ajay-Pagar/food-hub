import { IMG_URL } from "../config";

const RestaurantCard = ({ name, cloudinaryImageId, locality, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} alt="restaurant-img"></img>
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};
export default RestaurantCard;
