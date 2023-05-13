
import { render, screen, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";


// Advanced Filtering Testing !

describe("Filters on based on favourite", () => {
  // Favoured Cats !

  test("filter based on favoured cats", async () => {
    const cards = await screen.findAllByRole("article");

    // finding a specific button in a single Component
    const btnForFirstCard = within(cards[0]).getByRole("button");
    const btnForFourthCard = within(cards[1]).getByRole("button");

    //   Selecting those Specific Buttons !
    userEvent.click(btnForFirstCard);
    userEvent.click(btnForFourthCard);

    //   Slecting the options !
    userEvent.selectOptions(screen.getByLabelText(/favourite/i), "favoured");

    //   Getting all the values of selected items
    const favouredCats = screen.getAllByRole("article");

    //   Expecting the items we selecteed in the document
    expect(favouredCats).toStrictEqual([cards[0], cards[1]]);
  });

  // Not Favoured Cats !

  test("Should Filter based on not favoured Cats", async () => {
    // Waiting for the articles to be rendered after api fetching !
    const articles = await screen.findAllByRole("articles");

    const secondButtonElement = within(articles[2]).getByRole("button");
    const thirdButtonElement = within(articles[3]).getByRole("button");

    userEvent.click(secondButtonElement);
    userEvent.click(thirdButtonElement);

    //   Interact with select options !

    userEvent.selectOptions(
      screen.getByLabelText(/favourite/i),
      "not favoured"
    );

    //   Expecting the articles equal to the items we selected !
    const articles_ = screen.getAllByRole("articles");
    expect(articles_).toStrictEqual([cards[2], cards[3]]);
  });

  // Filtering all cats based on select !

  test("Should filter for favoured male cats", async () => {
    // Waiting for all the elements to get loaded !
    const cards = await screen.findAllByRole("article");

    // Selecting the elements !
    const firstButton = within(cards[0]).getByRole("button");
    const secondButton = within(cards[1]).getByRole("button");

    // Intearacting with the elements !
    userEvent.click(firstButton);
    userEvent.click(secondButton);

    userEvent.selectOptions(screen.getByLabelText(/favourite/i), "favoured");

    userEvent.selectOptions(screen.getByLabelText(/gender/i), "male");

    // Expecting the elements !

    const cards_ = screen.getAllByRole("article");
    expect(cards_).toStrictEqual([cards[3]]);
  });
});
