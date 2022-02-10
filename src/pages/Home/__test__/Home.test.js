import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

it("Home title is displayed on the page", () => {
  render(<MockHome />);
  const h1Element = screen.getByText(
    /Award-winning custom designs and digital branding solutions/i
  );
  expect(h1Element).toBeInTheDocument();
});

it("Home sub title is displayed on the page", () => {
  render(<MockHome />);
  const pElement = screen.getByTestId("home-subheaidng");
  expect(pElement).toBeInTheDocument();
});
