"use client";

import { useEffect, useState } from "react";
import MyFontAwesomeIcon from "./MyFontAwesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function DarkModeToggle() {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const [isDarkMode, setIsDarkMode] = useState(
    isLocalStorageAvailable && localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (isLocalStorageAvailable) {
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  }, [isDarkMode, isLocalStorageAvailable]);

  const toggleDarkMode = () => {
    if (isLocalStorageAvailable) {
      const newDarkMode = !isDarkMode;
      localStorage.setItem("darkMode", newDarkMode ? "true" : "false");
      setIsDarkMode(newDarkMode);
    }
  };

  return (
    <button
      id="toggleDarkMode"
      aria-label="Toggle Dark Mode"
      className={isDarkMode ? "dark" : ""}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <MyFontAwesomeIcon size="2x" icon={faSun} />
      ) : (
        <MyFontAwesomeIcon size="2x" icon={faMoon} />
      )}
    </button>
  );
}
