import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Alice" score={5} />);

  expect(screen.getByText("Alice")).toBeInTheDocument();
  expect(screen.getByText("5")).toBeInTheDocument();

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleIncrease = jest.fn();
  const handleDecrease = jest.fn();

  render(
    <Player
      name="Bob"
      score={2}
      onIncreasePlayerScore={handleIncrease}
      onDecreasePlayerScore={handleDecrease}
    />
  );

  await userEvent.click(screen.getByRole("button", { name: "Increase Score" }));
  await userEvent.click(screen.getByRole("button", { name: "Decrease Score" }));

  expect(handleIncrease).toHaveBeenCalledTimes(1);
  expect(handleIncrease).toHaveBeenCalledTimes(1);
});
