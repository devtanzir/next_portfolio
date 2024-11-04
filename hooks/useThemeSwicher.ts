import { useEffect, useState } from "react";

const useThemeSwitcher = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const userPref = window.localStorage.getItem("theme");
      if (userPref) {
        return userPref; // Initialize with user's saved preference
      }
      const mediaQuery = window.matchMedia(preferDarkQuery);
      return mediaQuery.matches ? "dark" : "light"; // Initialize based on system preference
    }
    return "light"; // Default to light on the server
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      let newMode = userPref || (mediaQuery.matches ? "dark" : "light");
      setMode(newMode);

      if (newMode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    handleChange(); // Set initial theme on mount

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [preferDarkQuery]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem("theme", mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
