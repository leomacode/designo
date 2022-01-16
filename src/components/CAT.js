import React from "react";
import { Button } from "./";
import "./cat.css";

function CAT() {
  return (
    <div className="cat container flex border-curve">
      <div className="cat-text">
        <h2 className="text-h2 text-white">Let’s talk about your project</h2>
        <p className="text-white text-body">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Button btnText="get in touch" path="contact" btnTheme="btn-dark" />
    </div>
  );
}

export default CAT;
