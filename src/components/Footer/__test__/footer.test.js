import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

it("footer logo is displayed on the page", () => {
  render(<MockFooter />);
  const imgElement = screen.getByAltText("logo");
  expect(imgElement).toBeInTheDocument();
});

it("all links are displayed on the page", () => {
  render(<MockFooter />);
  const aElement = screen.getAllByRole("link");
  expect(aElement.length).toBe(9);
});

it("contact address is displayed on the page", () => {
  render(<MockFooter />);
  const pElement = screen.getAllByTestId("contact-address");
  expect(pElement.length).toBe(3);
});

it("contact list is displayed on the page", () => {
  render(<MockFooter />);
  const pElement = screen.getAllByTestId("contact-list");
  expect(pElement.length).toBe(3);
});

it("social media images are displayed on the page", () => {
  render(<MockFooter />);
  const imgElement = screen.getAllByTestId("social-media-img");
  expect(imgElement.length).toBe(5);
});
