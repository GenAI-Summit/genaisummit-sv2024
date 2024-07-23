"use client";

import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme1");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (theme) => {
    const root = document.documentElement;
    switch (theme) {
      case "theme1":
        root.style.setProperty("--color-primary", "#0ea5e9");
        root.style.setProperty("--color-secondary", "#38bdf8");
        root.style.setProperty("--color-accent", "#0284c7");
        root.style.setProperty("--color-mainBg", "#f0f9ff");
        root.style.setProperty("--color-btnPrimary", "#0ea5e9");
        root.style.setProperty("--color-btnTextPrimary", "#ffffff");
        root.style.setProperty("--color-btnHoverPrimary", "#0284c7");
        root.style.setProperty("--color-btnSecondary", "#38bdf8");
        root.style.setProperty("--color-btnTextSecondary", "#ffffff");
        root.style.setProperty("--color-btnHoverSecondary", "#ffffff");
        root.style.setProperty("--color-sectionTitle", "#000000");
        root.style.setProperty("--color-sectionSubtitle", "#38bdf8");
        root.style.setProperty("--color-textPrimary", "#000000");
        root.style.setProperty("--color-textSecondary", "#38bdf8");
        root.style.setProperty("--color-textInPrimary", "#ffffff");
        root.style.setProperty("--color-navbarBg", "#ffffff");
        root.style.setProperty("--color-navbarText", "#6b7280");
        root.style.setProperty("--color-navbarActive", "#000000");
        root.style.setProperty("--color-navbarBorder", "#e5e7eb");
        root.style.setProperty("--color-bannerTextPrimary", "#ffffff");
        root.style.setProperty("--color-bannerTextSecondary", "#0ea5e9");
        root.style.setProperty("--color-cardBgPrimary", "#ffffff");
        root.style.setProperty("--color-cardBgSecondary", "#ffffff");
        root.style.setProperty("--color-cardTextPrimary", "#000000");
        root.style.setProperty("--color-cardTextSecondary", "#6b7280");
        root.style.setProperty("--color-cardBorder", "#ffffff");
        root.style.setProperty("--color-cardBorderHover", "#0ea5e9");
        root.style.setProperty("--color-footerBg", "#000000");
        root.style.setProperty("--color-footerTitle", "#ffffff");
        root.style.setProperty("--color-footerText", "#6b7280");
        root.style.setProperty("--color-footerBorder", "#ffffff");
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
