import { render, screen } from "@testing-library/react";
import LocationCard from "../LocationCard";
import { CanadaBig } from "../../../assets";

it("location card img is displayed on the page", () => {
  render(<LocationCard country="test-country" />);
  const imgElement = screen.getByAltText("test-country");
  expect(imgElement).toBeInTheDocument();
});

it("llocation card background image is displayed on the page", () => {
  render(<LocationCard imgBig={CanadaBig} />);
  const bgElement = screen.getByTestId("location-card-bg");
  expect(bgElement).toHaveStyle("backgroundImage: image-map-canada.png");
});

it("location card title is displayed on the page", () => {
  render(<LocationCard country="test" />);
  const h1Element = screen.getByRole("heading", { value: "test" });
  expect(h1Element).toBeInTheDocument();
});

it("office address is displayed on the page", () => {
  render(<LocationCard add1="test1" add2="test2" />);
  const add1Element = screen.getByText(/test1/i);
  expect(add1Element).toBeInTheDocument();
  const add2Element = screen.getByText(/test2/i);
  expect(add2Element).toBeInTheDocument();
});

it("contact is displayed on the page", () => {
  render(<LocationCard tele="12345" email="test@test.com" />);
  const pElement = screen.getByText(/contact/i);
  expect(pElement).toBeInTheDocument();

  const teleElement = screen.getByText(/12345/i);
  expect(teleElement).toBeInTheDocument();

  const emailElement = screen.getByText(/test@test.com/i);
  expect(emailElement).toBeInTheDocument();
});
