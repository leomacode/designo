import React from "react";
import { Button } from "./";
import "./cat.css";

function CAT() {
  return (
    <div className="cat container flex border-curve">
      <div className="cat-text text-white">
        <h1 className="text-h1">Let’s talk about your project</h1>
        <p className="text-body">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Button btnText="get in touch" path="contact" btnTheme="btn-dark" />
    </div>
  );
}

export default CAT;
