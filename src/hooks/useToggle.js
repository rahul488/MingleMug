import { useState } from "react";

const useToggle = (toggleVal) => {
  const [toggle, setToggle] = useState(toggleVal);

  const handleToggle = (val) => {
    setToggle(!toggle);
  };
  return { toggle, handleToggle };
};
export default useToggle;
