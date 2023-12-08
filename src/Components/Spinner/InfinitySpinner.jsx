import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function InfinitySpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
}

export default InfinitySpinner;
