import { render, screen, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

beforeEach(() => render(<App />));

// Advanced Rendering based on Filter on Male ore Female !!

describe("Pets", () => {
  // Filtering !

  // Male Cats !

  test("Should filter for male cats !", async () => {
    const cards = await screen.findAllByRole("article");
    const gender = screen.getByLabelText(/gender/i);

    //   clicking the male option
    userEvent.selectOptions(gender, "male");

    // getting the card with male data
    const maleCards = screen.getAllByRole("article");

    //   Getting only the cards with male
    expect(maleCards).toStrictEqual([cards[1], cards[3]]);
  });

  // Female Cards !

  test("Should filter all female cards", async () => {
    const cards = await screen.findAllByRole("article");

    const gender = screen.getByLabelText(/gender/i);

    //   Interacting with the elements !
    userEvent.click(gender, "female");

    //   Getting the filtered Data  !

    const femaleCats = screen.getAllByRole("article");
    expect(femaleCats).toStrictEqual([cards[0], cards[2], cards[4]]);
  });
});
