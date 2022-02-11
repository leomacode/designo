import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";
import { BrowserRouter } from "react-router-dom";

const MockNotFound = () => {
  return (
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
};

it("404 is displayed on the page", () => {
  render(<MockNotFound />);
  const h1Element = screen.getByText("404");
  expect(h1Element).toBeInTheDocument();
});

it("Not found message is displayed on the page", () => {
  render(<MockNotFound />);
  const h1Element = screen.getByText("page not found");
  expect(h1Element).toBeInTheDocument();
});

it("Go back link is displayed on the page", () => {
  render(<MockNotFound />);
  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();
});
