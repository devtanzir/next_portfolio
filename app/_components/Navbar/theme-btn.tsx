"use client";
import useThemeSwitcher from "@/hooks/useThemeSwicher";
import React from "react";
import { MoonIcon, SunIcon } from "./nav-icons";

const ThemeButton = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`ml-3 flex items-center justify-center rounded-full p-1
        ${
          mode === "light"
            ? "bg-dark dark:bg-light text-light dark:text-dark w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1  "
            : "bg-light dark:bg-dark text-dark dark:text-light w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1 "
        }
        `}
      >
        {mode === "dark" ? (
          <SunIcon className={"fill-dark dark:fill-light "} />
        ) : (
          <MoonIcon className={"fill-dark dark:fill-light"} />
        )}
      </button>
    </>
  );
};

export default ThemeButton;
