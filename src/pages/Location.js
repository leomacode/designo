import React from "react";
import { CAT, LocationCard } from "../components";
import { locations } from "../data";
import "./location.css";
function Location() {
  return (
    <main className="location nav-offset">
      <div className="locations section-wrap flex">
        {locations.map(
          ({ country, add1, add2, email, imgBig, imgSmall, tele }) => (
            <section
              className="location-info "
              key={country}
              id={country === "united kingdom" ? "uk" : country}
            >
              <LocationCard
                country={country}
                add1={add1}
                add2={add2}
                tele={tele}
                email={email}
                imgBig={imgBig}
                imgSmall={imgSmall}
              />
            </section>
          )
        )}
      </div>

      <section id="look" className="loction-cat container">
        <CAT />
      </section>
    </main>
  );
}

export default Location;
