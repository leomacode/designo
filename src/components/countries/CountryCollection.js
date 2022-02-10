import React from "react";
import "./countryCollection.css";
import { Australia, Canada, UK } from "../../assets";
import CountryCard from "./CountryCard";
function CountryCollection() {
  const countries = [
    { name: "Cananda", img: Canada },
    { name: "Australia", img: Australia },
    { name: "UK", img: UK },
  ];

  return (
    <div className="country-collection flex" data-testid="countries">
      {countries.map(({ name, img }) => (
        <CountryCard key={name} name={name} img={img} />
      ))}
    </div>
  );
}

export default CountryCollection;
