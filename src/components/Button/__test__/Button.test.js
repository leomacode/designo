import { render, screen } from "@testing-library/react";
import Button from "../Button";
import { BrowserRouter } from "react-router-dom";

const MockButton = ({ btnText, path, btnTheme }) => {
  return (
    <BrowserRouter>
      <Button btnText={btnText} pat={path} btnTheme={btnTheme} />
    </BrowserRouter>
  );
};

it("button element is displayed as a link on the page", () => {
  render(<MockButton btnText="test" path="test.com" btnTheme="light" />);
  const buttonElement = screen.getByRole("link");
  expect(buttonElement).toHaveAttribute("href");
});

it("button element displays correct text", () => {
  render(<MockButton btnText="test" path="test.com" btnTheme="light" />);
  const buttonElement = screen.getByText(/test/i);
  expect(buttonElement).toBeInTheDocument();
});

it("button element displays correct them", () => {
  render(<MockButton btnText="test" path="test.com" btnTheme="btn-light" />);
  const buttonElement = screen.getByRole("link");
  expect(buttonElement).toHaveClass("btn-light");
});
