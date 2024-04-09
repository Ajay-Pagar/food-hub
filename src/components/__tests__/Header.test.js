import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import { StaticRouter } from "react-router-dom/server"; // create element

test("Logo should load on rendering heder", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // console.log(header);

  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe("http://localhost/dummy.png");
  //Check if logo is loaded
});

test("Online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status"); // misspells testid for debugging it shows whole html

  expect(onlineStatus.innerHTML).toBe("🟢"); // it returns original JSX line as it is if we haven't write innnerHTML
});

test("Cart should have zero items while rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart-item");

  expect(cart.innerHTML).toBe(`<a href="/cart">cart</a> - 0`);
});
