import React from "react";
import { smallCircle, twoCircles } from "../assets";
import { useDynamicImg } from "../hooks";
import "./locationCard.css";

function LocationCard({ country, add1, add2, tele, email, imgBig, imgSmall }) {
  const img = useDynamicImg(imgBig, imgSmall, imgBig);
  const bgImg = useDynamicImg(smallCircle, twoCircles, twoCircles);
  return (
    <div className="location-card flex">
      <div className="location-card-img">
        <img src={img} alt={country} />
      </div>
      <div
        className="location-card-text text-center bg-lt-pink flex"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <h1 className="location-card-text-title text-h1 text-peach capitalize">
          {country}
        </h1>
        <div className="location-card-contact-block text-body flex">
          <div className="location-card-office">
            <p className="bold">Designo Central Office</p>
            <p>{add1}</p>
            <p>{add2}</p>
          </div>

          <div className="location-card-contact">
            <p className="bold">Contact</p>
            <p>
              <span>P : </span>
              {tele}
            </p>
            <p>
              <span> M: </span>
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
