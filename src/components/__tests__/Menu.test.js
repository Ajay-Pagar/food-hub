import { render, waitFor, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("cart-tems");

  expect(cart.innerHTML).toBe(`<a href="/cart">cart</a> - 1`);
});
