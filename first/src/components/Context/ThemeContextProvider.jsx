import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("black");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
