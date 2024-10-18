import { useEffect, useState } from "react";

const useThemeSwitcher = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState<string>(() => {
    const userPref = window.localStorage.getItem("theme");
    if (userPref) {
      return userPref; // Initialize with user's saved preference
    }
    const mediaQuery = window.matchMedia(preferDarkQuery);
    return mediaQuery.matches ? "dark" : "light"; // Initialize based on system preference
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [preferDarkQuery]);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
