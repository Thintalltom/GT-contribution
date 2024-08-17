import React from "react";

interface ThemeButtonProps {
  theme: string;
  setTheme: (theme: string) => void;
  lightIcon: string;
  darkIcon: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  theme,
  setTheme,
  lightIcon,
  darkIcon,
}) => {
  const isLightTheme = theme === "light";

  return (
    <button onClick={() => setTheme(isLightTheme ? "dark" : "light")}>
      <img src={isLightTheme ? darkIcon : lightIcon} alt="" />
    </button>
  );
};

export default ThemeButton; 
