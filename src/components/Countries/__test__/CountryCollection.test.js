import { render, screen } from "@testing-library/react";
import CountryCollection from "../CountryCollection";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const MockCountryCollection = () => {
  return (
    <BrowserRouter>
      <CountryCollection />
    </BrowserRouter>
  );
};

it("should render country collection", () => {
  render(<MockCountryCollection />);
  const countriesElement = screen.getByTestId("countries");
  expect(countriesElement).toBeInTheDocument();
});
