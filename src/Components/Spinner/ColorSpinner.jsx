import React from "react";
import { ColorRing } from "react-loader-spinner";

function ColorSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
}

export default ColorSpinner;
