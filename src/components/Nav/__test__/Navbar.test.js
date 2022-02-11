import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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

it("logo image is displayed on the page", () => {
  render(<MockNavbar />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
});

it("Nav button is displayed when the width is less than 40rem", () => {
  render(<MockNavbar />);
  window.innerWidth = 600; // <40rem
  const navBtnElement = screen.getByTestId("nav-btn");
  expect(navBtnElement).toHaveStyle("display: block");
});

it("Nav menu is displayed when the nav button is clicked", () => {
  render(<MockNavbar />);
  window.innerWidth = 600; // <40rem
  const navBtnElement = screen.getByTestId("nav-btn");
  userEvent.click(navBtnElement);
  const navElement = screen.getByRole("navigation");
  expect(navElement).toHaveStyle("display: block");
});

it("Overlay is displayed when the nav button is clicked", () => {
  render(<MockNavbar />);
  window.innerWidth = 600; // < 40rem
  const navBtnElement = screen.getByTestId("nav-btn");
  userEvent.click(navBtnElement);
  const overlayElement = screen.getByTestId("overlay");
  expect(overlayElement).toBeInTheDocument();
});

it("navigation bar is displayed when the width is over 40rem", () => {
  render(<MockNavbar />);
  window.innerWidth = 1000; // > 40rem
  const navElement = screen.getByRole("navigation");
  expect(navElement).toHaveStyle("display: block");
});
