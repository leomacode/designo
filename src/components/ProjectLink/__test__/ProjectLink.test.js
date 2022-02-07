import { render, screen } from "@testing-library/react";
import ProjectLink from "../ProjectLink";
import { BrowserRouter } from "react-router-dom";

const MockProjectLink = ({ path }) => {
  return (
    <BrowserRouter>
      <ProjectLink path={path} />
    </BrowserRouter>
  );
};

it("project link is displayed on the page", () => {
  render(<MockProjectLink path="app design" />);
  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();
});

it("view project text is displayed on the page", () => {
  render(<MockProjectLink path="app design" />);
  const textElement = screen.getByText(/view projects/i);
  expect(textElement).toBeInTheDocument();
});

it("view project icon arrow is displayed on the page", () => {
  render(<MockProjectLink path="app design" />);
  const iconElement = screen.getByAltText("icon");
  expect(iconElement).toBeInTheDocument();
});
