import React from "react";
import { Button } from "..";
import "./countryCard.css";
function CountryCard({ name, img }) {
  return (
    <div className="country-card flex">
      <div className="country-card-img">
        <img src={img} alt="country-card" />
      </div>
      <h3 className="country-card-name text-h3 uppercase text-center">
        {name}
      </h3>
      <div className="country-button">
        <Button
          btnText="see location"
          path={`locations#${name.toLowerCase()}`}
          btnTheme="btn-light"
        />
      </div>
    </div>
  );
}

export default CountryCard;
