import React from "react";
import { CAT, LocationCard } from "../components";
import "./location.css";
function Location() {
  return (
    <main className="location nav-offset">
      <section className="locations section-wrap">
        <LocationCard
          country="canada"
          add1="3886 Wellington Street"
          add2="Toronto, Ontario M9C 3J5"
          tele="+1 253-863-8967"
          email="contact@designo.co"
        />
      </section>

      <section className="loction-cat container">
        <CAT />
      </section>
    </main>
  );
}

export default Location;
