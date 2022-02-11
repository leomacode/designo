import { render, screen } from "@testing-library/react";
import CountryCard from "../CountryCard";
import { BrowserRouter } from "react-router-dom";
import { Canada } from "../../../assets";
import "@testing-library/jest-dom/extend-expect";

const MockCountryCard = ({ name, img }) => {
  return (
    <BrowserRouter>
      <CountryCard name={name} img={img} />
    </BrowserRouter>
  );
};

it("should render country image", () => {
  render(<MockCountryCard name="canada" img={Canada} />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
});

it("should render country name", () => {
  render(<MockCountryCard name="canada" img={Canada} />);
  const nameElement = screen.getByRole("heading", { value: "canada" });
  expect(nameElement).toBeInTheDocument();
});

it("should render location button", () => {
  render(<MockCountryCard name="canada" img={Canada} />);
  const buttonElement = screen.getByRole("link");
  expect(buttonElement).toBeInTheDocument();
});
