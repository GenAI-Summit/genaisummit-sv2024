"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/Theme";

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const themeCnt = new Array(20).fill(0);

  return (
    <select
      value={theme}
      onChange={(e) => changeTheme(e.target.value)}
      className="bg-btnPrimary text-btnTextPrimary border border-gray-300 rounded-md px-2 py-1"
    >
      {themeCnt.map((_, i) => (
        <option key={i} value={`theme${i + 1}`}>
          Theme {i + 1}
        </option>
      ))}
    </select>
  );
};

export default ThemeSwitcher;
