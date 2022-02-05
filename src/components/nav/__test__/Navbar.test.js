import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

it("logo element is displayed on the page", () => {
  render(<MockNavbar />);
  const logoElement = screen.getByTestId("logo-element");
  expect(logoElement).toBeInTheDocument();
});

it("logo imgae is displayed on the page", () => {
  render(<MockNavbar />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
});

it("Nav button is visible when the width is less than 40rem", () => {
  window.innerWidth = 600;
  render(<MockNavbar />);
  const navBtnElement = screen.getByTestId("nav-btn");
  expect(navBtnElement).toHaveStyle("display:block");
});
