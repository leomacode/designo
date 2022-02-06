import { render, screen } from "@testing-library/react";
import AboutCard from "../AboutCard";

it("About card image is displayed on the page", () => {
  render(<AboutCard title="test-title" p1="test p1" p2="test p2" />);
  const imageElement = screen.getByAltText("about-card-test-title");
  expect(imageElement).toBeInTheDocument();
});

it("About card title is displayed on the page", () => {
  render(<AboutCard title="test-title" p1="test p1" p2="test p2" />);
  const titleElement = screen.getByRole("heading");
  expect(titleElement).toBeInTheDocument();
});

it("About card paragraphs are displayed on the page", () => {
  render(<AboutCard title="test-title" p1="test p1" p2="test p2" />);
  const titleElement = screen.getAllByTestId("p");
  expect(titleElement.length).toBe(2);
});
