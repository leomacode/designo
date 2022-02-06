import { render, screen } from "@testing-library/react";
import CAT from "../CAT";
import { BrowserRouter } from "react-router-dom";

const MockCAT = () => {
  return (
    <BrowserRouter>
      <CAT />
    </BrowserRouter>
  );
};

it("h1 title is displayed on the page", () => {
  render(<MockCAT />);
  const h1Element = screen.getByRole("heading");
  expect(h1Element).toBeInTheDocument();
});

it("p element is displayed on the page", () => {
  render(<MockCAT />);
  const pElement = screen.getByTestId("text-body");
  expect(pElement).toBeInTheDocument();
});

it("cat button is displayed on the page", () => {
  render(<MockCAT />);
  const buttonElement = screen.getByRole("link");
  expect(buttonElement).toHaveClass("btn-dark");
});
