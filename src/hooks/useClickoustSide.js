import { useEffect, useRef } from "react";

const useClickOutside = (callback, delay = 0) => {
  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    const timeOut = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, [delay]);

    // Detach the event listener when the component unmounts
    return () => {
      clearTimeout(timeOut);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export default useClickOutside;
