import "@testing-library/jest-dom";
import { RESTAURANT_DATA } from "../mocks/data";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { fireEvent } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Search result on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer-ui");
  expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(12);
});

test("Restaurant should load on homepage", async() => {

    const body = render(
        <StaticRouter>
            <Provider store={Store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    await waitFor(()=>expect(body.getByTestId("search-btn")));

    const restlist = body.getByTestId("res-list");

    expect(restlist.children.length).toBe(20)
});


test("Search for string(food) on Home page",async()=>{
    const body = render(
        <StaticRouter>
            <Provider>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    await waitFor(()=>expect(body.getByTestId("search-btn")));

    const input = body.getByTestId("search-input");

    fireEvent.change(input,{
        target : {
            value :"king"
        }
    })
    const searhcBtn = body.getByTestId("search-btn");
    fireEvent.click(searhcBtn);

    const restlist = body.getByTestId("res-list");

    expect(restlist.children.length).toBe(1)
})











