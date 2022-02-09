import { render, screen } from "@testing-library/react";
import About from "../About";
import { BrowserRouter } from "react-router-dom";

const MockAbout = () => {
  return (
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
};

it("About us img is displayed on the page", () => {
  render(<MockAbout />);
  const imgElement = screen.getByAltText("hero");
  expect(imgElement).toBeInTheDocument();
});

it("About text is displayed on the page", () => {
  render(<MockAbout />);
  const pElement = screen.getByTestId("about-text-body");
  expect(pElement).toBeInTheDocument();
});
