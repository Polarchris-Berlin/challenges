import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name"
      name="playerName"
      placeholder="Enter name"
      value=""
      onChange={() => {}}
    />
  );

  const input = screen.getByPlaceholderText("Enter name");
  const label = screen.getByLabelText("Name");

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "playerName");
  expect(label).toBeInTheDocument();
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Name"
      name="playerName"
      placeholder="Enter name"
      value=""
      onChange={handleChange}
    />
  );

  const input = screen.getByPlaceholderText("Enter name");

  await userEvent.type(input, "Alex");

  expect(handleChange).toHaveBeenCalledTimes(4);
});
