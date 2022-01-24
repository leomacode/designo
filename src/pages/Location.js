import React from "react";
import { CAT, LocationCard } from "../components";
import { locations } from "../data";
import "./location.css";
function Location() {
  return (
    <main className="location nav-offset">
      <section className="locations section-wrap flex">
        {locations.map(
          ({ country, add1, add2, email, imgBig, imgSmall, tele }) => (
            <LocationCard
              key={country}
              country={country}
              add1={add1}
              add2={add2}
              tele={tele}
              email={email}
              imgBig={imgBig}
              imgSmall={imgSmall}
            />
          )
        )}
      </section>

      <section className="loction-cat container">
        <CAT />
      </section>
    </main>
  );
}

export default Location;
