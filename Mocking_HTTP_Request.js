import { render, screen } from "@testing-library/react";
import App from "../App";

// Importing dependecy from mock service worker !

import { response, rest } from "msw";
import { setupServer } from "msw/node";
import datas from "./data";

// The End point we want ot mock !
const mockRestApi = "http://localhost:4000/cats";

const server = setupServer(
  rest.get(mockRestApi, (req, res, ctx) => {
    return response(ctx.status(200), ctx.json(datas));
  })
);

// BeforAll hook for mocking the data beofre all the test
beforeAll(() => server.listen());

// Resetting the handlers
afterEach(() => server.resetHandlers());

// We have to close the server after all test
afterAll(() => server.close());



describe("Pets", () => {
  // Testing the articles to have length 5
  test("Should Render the correct amount of cards", async () => {
    const { findAllByRole } = render(<App />);
    const articles = await findAllByRole("article");
    expect(articles.length).toBe(5);
  });
});
