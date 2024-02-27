import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false);
    const [theme, setTheme] = useState(localStorage?.getItem("theme") ?? "light");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

      if (!isMounted) {
        return null;
      }

    return <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
}