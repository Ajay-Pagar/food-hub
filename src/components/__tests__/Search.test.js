import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import Store from "../utils/Store";
import { RESTAURANT_DATA } from "../../mocks/data";

// we are writing how fetch is working behind the scene
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    }, // response.json() is not function so we need to write it inside function
  });
});

test("Search results on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer-ui");

  // expect(shimmer).toBeInTheDocument(); // it will check the shimmer is loading or not

  expect(shimmer.children.length).toBe(12); // we are checking the length of shimmer from its children
  // console.log(shimmer);
});

test("Restaurant should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn"))); //load the Search button this will wait until our shimmer is getting load

  const reslist = body.getByTestId("res-list"); // getting the restaurant list

  expect(reslist.children.length).toBe(20);
});

test("Search for string(food) on Home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    // we need to fire an event on chnage of input
    target: {
      // so we need to get the target value as we do in onChnage(event.target.value)
      value: "king", // we are not typing on browser, this should automatically get typed so thats why we putted initial value
    },   // this value is changing with respect to value we have passed "king"
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const reslist = body.getByTestId("res-list"); // getting the restaurant list
  // console.log(reslist);
  expect(reslist.children.length).toBe(1);
});
