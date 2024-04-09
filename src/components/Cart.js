import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // subcribing the specific portion of store i.e., cart
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart(clearCart));
  };
  return (
    <div>
      <h1>Cart items - {cartItems.length}</h1>
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cartItems.map((items) => (
          <CartItemCard key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
