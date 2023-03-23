import { useEffect, useState } from "react";

export const useInput = () => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
  };
  const findKey = (key) => keys[key];

  useEffect(() => {
    const handleKeyDown = (e) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: true }));
    };
    const handleKeyUp = (e) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: false }));
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    console.log("start");
    return () => {
      console.log("clear");
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return input;
};
