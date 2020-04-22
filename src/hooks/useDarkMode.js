import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [dark, setDark] = useLocalStorage("darkMode", true);
  useEffect(() => {
    const body = document.querySelector("body");
    if (dark) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [dark]);

  return [dark, setDark];
};

export default useDarkMode;
