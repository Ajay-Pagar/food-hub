import { IMG_URL } from "../config";

const CartItemCard = ({ items }) => {
  const { name, imageId, defaultPrice, category } = items;
  // console.log(name + "Crd");
  return (
    <div className="cart-card">
      <img src={IMG_URL + imageId} alt="food-img" />
      <h1>{name}</h1>
      <h4>{category}</h4>
      <h3>Rupees : {defaultPrice / 100}</h3>
    </div>
  );
};

export default CartItemCard;
