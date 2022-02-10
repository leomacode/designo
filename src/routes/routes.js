import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Location, Contact, NotFound } from "./../pages";
import { Service } from "./../pages";
function createRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:service" element={<Service />} />
      <Route path="about" element={<About />} />
      <Route path="locations" element={<Location />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default createRoutes;
