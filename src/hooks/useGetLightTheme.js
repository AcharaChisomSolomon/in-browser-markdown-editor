import { useEffect, useState } from "react";

export default function useGetLightTheme() {
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: light)").matches;
    }
    return true;
  };

  const [isLightTheme, setIsLightTheme] = useState(getInitialTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e) => {
      setIsLightTheme(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Set data-theme attribute on body
  useEffect(() => {
    document.body.setAttribute("data-theme", isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  return [isLightTheme, setIsLightTheme];
}
