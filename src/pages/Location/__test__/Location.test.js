import { render, screen } from "@testing-library/react";
import Location from "../Location";
import { BrowserRouter } from "react-router-dom";

const MockLocation = () => {
  return (
    <BrowserRouter>
      <Location />
    </BrowserRouter>
  );
};

it("Location collection is displayed on the page", () => {
  render(<MockLocation />);
  const divElement = screen.getByTestId("location-collection");
  expect(divElement).toBeInTheDocument();
});

it("Location cat is displayed on the page", () => {
  render(<MockLocation />);
  const divElement = screen.getByTestId("location-cat");
  expect(divElement).toBeInTheDocument();
});
