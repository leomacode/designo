import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Location, Contact, NotFound } from "./../pages";
import { Service } from "./../components";
function createRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path=":service" element={<Service />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="locations" element={<Location />} />
      <Route path="contact" element={<Contact />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default createRoutes;
