import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "light"
        ? "☀️" // Light Mode
        : theme === "dark"
          ? "🌙" // Dark Mode
          : theme === "blue"
            ? "🔵" // Blue Mode
            : theme === "green"
              ? "🟢" // Green Mode
              : theme === "purple"
                ? "🟣"
                : "❓"} {/* Default value to avoid syntax error */}
    </button>
  );
};

export default ThemeToggle;
