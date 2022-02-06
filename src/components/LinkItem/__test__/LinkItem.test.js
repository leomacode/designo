import { render, screen } from "@testing-library/react";
import LinkItem from "../LinkItem";
import { BrowserRouter } from "react-router-dom";

const MockLinkItem = ({ path }) => {
  return (
    <BrowserRouter>
      <LinkItem path={path} />
    </BrowserRouter>
  );
};

it("nav link is displayed on the page", () => {
  render(<MockLinkItem path="test" />);
  const aElement = screen.getByRole("link");
  expect(aElement).toHaveAttribute("href", "/test");
});
