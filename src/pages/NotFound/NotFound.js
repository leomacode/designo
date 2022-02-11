import React from "react";
import { Button } from "../../components";
import "./notFound.css";

function NotFound() {
  return (
    <main className="page-not-found container nav-offset flex">
      <h1 className="uppercase text-h1">404</h1>
      <h2 className="uppercase text-h2">page not found</h2>
      <Button btnText="Go Back" path="" btnTheme="btn-light" />
    </main>
  );
}

export default NotFound;
