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
      case "theme2":
        root.style.setProperty("--color-primary", "#0f0"); // Neon Green
        root.style.setProperty("--color-secondary", "#00f"); // Neon Blue
        root.style.setProperty("--color-accent", "#ff00ff"); // Neon Magenta
        root.style.setProperty("--color-mainBg", "#000"); // Black Background
        root.style.setProperty("--color-btnPrimary", "#0f0"); // Neon Green Button
        root.style.setProperty("--color-btnTextPrimary", "#000"); // Black Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#00f"); // Neon Blue Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#000"); // Black Button Text
        root.style.setProperty("--color-btnSecondary", "#ff00ff"); // Neon Magenta Button
        root.style.setProperty("--color-btnHoverSecondary", "#0f0"); // Neon Green Button Hover
        root.style.setProperty("--color-sectionTitle", "#fff"); // White Section Title
        root.style.setProperty("--color-sectionSubtitle", "#0f0"); // Neon Green Section Subtitle
        root.style.setProperty("--color-textPrimary", "#fff"); // White Text
        root.style.setProperty("--color-textSecondary", "#00f"); // Neon Blue Text
        root.style.setProperty("--color-textInPrimary", "#000"); // Black Text in Primary
        root.style.setProperty("--color-navbarBg", "#000"); // Black Navbar Background
        root.style.setProperty("--color-navbarText", "#fff"); // White Navbar Text
        root.style.setProperty("--color-navbarActive", "#0f0"); // Neon Green Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#ff00ff"); // Neon Magenta Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#fff"); // White Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#0f0"); // Neon Green Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#000"); // Black Card Background
        root.style.setProperty("--color-cardBgSecondary", "#fff"); // White Card Background
        root.style.setProperty("--color-cardTextPrimary", "#fff"); // White Card Text
        root.style.setProperty("--color-cardTextSecondary", "#00f"); // Neon Blue Card Text
        root.style.setProperty("--color-cardBorder", "#0f0"); // Neon Green Card Border
        root.style.setProperty("--color-cardBorderHover", "#ff00ff"); // Neon Magenta Card Border Hover
        root.style.setProperty("--color-footerBg", "#000"); // Black Footer Background
        root.style.setProperty("--color-footerTitle", "#fff"); // White Footer Title
        root.style.setProperty("--color-footerText", "#0f0"); // Neon Green Footer Text
        root.style.setProperty("--color-footerBorder", "#ff00ff"); // Neon Magenta Footer Border
        break;
      case "theme3":
        root.style.setProperty("--color-primary", "#ff007f"); // Bright Pink
        root.style.setProperty("--color-secondary", "#00ffea"); // Cyan
        root.style.setProperty("--color-accent", "#ffea00"); // Bright Yellow
        root.style.setProperty("--color-mainBg", "#1a1a1a"); // Dark Gray Background
        root.style.setProperty("--color-btnPrimary", "#ff007f"); // Bright Pink Button
        root.style.setProperty("--color-btnTextPrimary", "#1a1a1a"); // Dark Gray Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#00ffea"); // Cyan Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#1a1a1a"); // Dark Gray Button Text
        root.style.setProperty("--color-btnSecondary", "#ffea00"); // Bright Yellow Button
        root.style.setProperty("--color-btnHoverSecondary", "#ff007f"); // Bright Pink Button Hover
        root.style.setProperty("--color-sectionTitle", "#ffffff"); // White Section Title
        root.style.setProperty("--color-sectionSubtitle", "#ff007f"); // Bright Pink Section Subtitle
        root.style.setProperty("--color-textPrimary", "#ffffff"); // White Text
        root.style.setProperty("--color-textSecondary", "#00ffea"); // Cyan Text
        root.style.setProperty("--color-textInPrimary", "#1a1a1a"); // Dark Gray Text in Primary
        root.style.setProperty("--color-navbarBg", "#1a1a1a"); // Dark Gray Navbar Background
        root.style.setProperty("--color-navbarText", "#ffffff"); // White Navbar Text
        root.style.setProperty("--color-navbarActive", "#ff007f"); // Bright Pink Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#00ffea"); // Cyan Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#ffffff"); // White Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#ff007f"); // Bright Pink Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#1a1a1a"); // Dark Gray Card Background
        root.style.setProperty("--color-cardBgSecondary", "#ffffff"); // White Card Background
        root.style.setProperty("--color-cardTextPrimary", "#ffffff"); // White Card Text
        root.style.setProperty("--color-cardTextSecondary", "#00ffea"); // Cyan Card Text
        root.style.setProperty("--color-cardBorder", "#ff007f"); // Bright Pink Card Border
        root.style.setProperty("--color-cardBorderHover", "#00ffea"); // Cyan Card Border Hover
        root.style.setProperty("--color-footerBg", "#1a1a1a"); // Dark Gray Footer Background
        root.style.setProperty("--color-footerTitle", "#ffffff"); // White Footer Title
        root.style.setProperty("--color-footerText", "#ff007f"); // Bright Pink Footer Text
        root.style.setProperty("--color-footerBorder", "#00ffea"); // Cyan Footer Border
        break;
      case "theme4":
        root.style.setProperty("--color-primary", "#1b1b3a"); // Deep Space Blue
        root.style.setProperty("--color-secondary", "#6262ff"); // Electric Blue
        root.style.setProperty("--color-accent", "#ff4791"); // Neon Pink
        root.style.setProperty("--color-mainBg", "#0f0f2e"); // Dark Blue Background
        root.style.setProperty("--color-btnPrimary", "#6262ff"); // Electric Blue Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#ff4791"); // Neon Pink Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#1b1b3a"); // Deep Space Blue Button
        root.style.setProperty("--color-btnHoverSecondary", "#6262ff"); // Electric Blue Button Hover
        root.style.setProperty("--color-sectionTitle", "#ffffff"); // White Section Title
        root.style.setProperty("--color-sectionSubtitle", "#6262ff"); // Electric Blue Section Subtitle
        root.style.setProperty("--color-textPrimary", "#ffffff"); // White Text
        root.style.setProperty("--color-textSecondary", "#ff4791"); // Neon Pink Text
        root.style.setProperty("--color-textInPrimary", "#0f0f2e"); // Dark Blue Text in Primary
        root.style.setProperty("--color-navbarBg", "#1b1b3a"); // Deep Space Blue Navbar Background
        root.style.setProperty("--color-navbarText", "#ffffff"); // White Navbar Text
        root.style.setProperty("--color-navbarActive", "#6262ff"); // Electric Blue Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#ff4791"); // Neon Pink Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#ffffff"); // White Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#6262ff"); // Electric Blue Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#1b1b3a"); // Deep Space Blue Card Background
        root.style.setProperty("--color-cardBgSecondary", "#0f0f2e"); // Dark Blue Card Background
        root.style.setProperty("--color-cardTextPrimary", "#ffffff"); // White Card Text
        root.style.setProperty("--color-cardTextSecondary", "#ff4791"); // Neon Pink Card Text
        root.style.setProperty("--color-cardBorder", "#6262ff"); // Electric Blue Card Border
        root.style.setProperty("--color-cardBorderHover", "#ff4791"); // Neon Pink Card Border Hover
        root.style.setProperty("--color-footerBg", "#1b1b3a"); // Deep Space Blue Footer Background
        root.style.setProperty("--color-footerTitle", "#ffffff"); // White Footer Title
        root.style.setProperty("--color-footerText", "#6262ff"); // Electric Blue Footer Text
        root.style.setProperty("--color-footerBorder", "#ff4791"); // Neon Pink Footer Border
        break;
      case "theme5":
        root.style.setProperty("--color-primary", "#00ffff"); // Cyan
        root.style.setProperty("--color-secondary", "#ff00ff"); // Magenta
        root.style.setProperty("--color-accent", "#ff4500"); // Bright Orange
        root.style.setProperty("--color-mainBg", "#001f3f"); // Navy Blue Background
        root.style.setProperty("--color-btnPrimary", "#00ffff"); // Cyan Button
        root.style.setProperty("--color-btnTextPrimary", "#001f3f"); // Navy Blue Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#ff00ff"); // Magenta Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#001f3f"); // Navy Blue Button Text
        root.style.setProperty("--color-btnSecondary", "#ff4500"); // Bright Orange Button
        root.style.setProperty("--color-btnHoverSecondary", "#00ffff"); // Cyan Button Hover
        root.style.setProperty("--color-sectionTitle", "#ffffff"); // White Section Title
        root.style.setProperty("--color-sectionSubtitle", "#00ffff"); // Cyan Section Subtitle
        root.style.setProperty("--color-textPrimary", "#ffffff"); // White Text
        root.style.setProperty("--color-textSecondary", "#ff00ff"); // Magenta Text
        root.style.setProperty("--color-textInPrimary", "#001f3f"); // Navy Blue Text in Primary
        root.style.setProperty("--color-navbarBg", "#001f3f"); // Navy Blue Navbar Background
        root.style.setProperty("--color-navbarText", "#ffffff"); // White Navbar Text
        root.style.setProperty("--color-navbarActive", "#00ffff"); // Cyan Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#ff00ff"); // Magenta Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#ffffff"); // White Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#00ffff"); // Cyan Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#001f3f"); // Navy Blue Card Background
        root.style.setProperty("--color-cardBgSecondary", "#002f4f"); // Darker Blue Card Background
        root.style.setProperty("--color-cardTextPrimary", "#ffffff"); // White Card Text
        root.style.setProperty("--color-cardTextSecondary", "#ff00ff"); // Magenta Card Text
        root.style.setProperty("--color-cardBorder", "#00ffff"); // Cyan Card Border
        root.style.setProperty("--color-cardBorderHover", "#ff4500"); // Bright Orange Card Border Hover
        root.style.setProperty("--color-footerBg", "#001f3f"); // Navy Blue Footer Background
        root.style.setProperty("--color-footerTitle", "#ffffff"); // White Footer Title
        root.style.setProperty("--color-footerText", "#00ffff"); // Cyan Footer Text
        root.style.setProperty("--color-footerBorder", "#ff00ff"); // Magenta Footer Border
        break;
      case "theme6":
        root.style.setProperty("--color-primary", "#ff66b2"); // Holographic Pink
        root.style.setProperty("--color-secondary", "#66ffcc"); // Holographic Green
        root.style.setProperty("--color-accent", "#ffcc66"); // Holographic Yellow
        root.style.setProperty("--color-mainBg", "#2d2d2d"); // Dark Gray Background
        root.style.setProperty("--color-btnPrimary", "#66ffcc"); // Holographic Green Button
        root.style.setProperty("--color-btnTextPrimary", "#2d2d2d"); // Dark Gray Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#ff66b2"); // Holographic Pink Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#2d2d2d"); // Dark Gray Button Text
        root.style.setProperty("--color-btnSecondary", "#ffcc66"); // Holographic Yellow Button
        root.style.setProperty("--color-btnHoverSecondary", "#66ffcc"); // Holographic Green Button Hover
        root.style.setProperty("--color-sectionTitle", "#ffffff"); // White Section Title
        root.style.setProperty("--color-sectionSubtitle", "#ff66b2"); // Holographic Pink Section Subtitle
        root.style.setProperty("--color-textPrimary", "#ffffff"); // White Text
        root.style.setProperty("--color-textSecondary", "#66ffcc"); // Holographic Green Text
        root.style.setProperty("--color-textInPrimary", "#2d2d2d"); // Dark Gray Text in Primary
        root.style.setProperty("--color-navbarBg", "#2d2d2d"); // Dark Gray Navbar Background
        root.style.setProperty("--color-navbarText", "#ffffff"); // White Navbar Text
        root.style.setProperty("--color-navbarActive", "#ff66b2"); // Holographic Pink Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#66ffcc"); // Holographic Green Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#ffffff"); // White Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#ff66b2"); // Holographic Pink Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#2d2d2d"); // Dark Gray Card Background
        root.style.setProperty("--color-cardBgSecondary", "#3d3d3d"); // Medium Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#ffffff"); // White Card Text
        root.style.setProperty("--color-cardTextSecondary", "#66ffcc"); // Holographic Green Card Text
        root.style.setProperty("--color-cardBorder", "#ffcc66"); // Holographic Yellow Card Border
        root.style.setProperty("--color-cardBorderHover", "#ff66b2"); // Holographic Pink Card Border Hover
        root.style.setProperty("--color-footerBg", "#2d2d2d"); // Dark Gray Footer Background
        root.style.setProperty("--color-footerTitle", "#ffffff"); // White Footer Title
        root.style.setProperty("--color-footerText", "#ff66b2"); // Holographic Pink Footer Text
        root.style.setProperty("--color-footerBorder", "#66ffcc"); // Holographic Green Footer Border
        break;
      case "theme7":
        root.style.setProperty("--color-primary", "#39ff14"); // Matrix Green
        root.style.setProperty("--color-secondary", "#0a0a0a"); // Almost Black
        root.style.setProperty("--color-accent", "#ff5733"); // Vibrant Orange
        root.style.setProperty("--color-mainBg", "#121212"); // Very Dark Gray Background
        root.style.setProperty("--color-btnPrimary", "#39ff14"); // Matrix Green Button
        root.style.setProperty("--color-btnTextPrimary", "#0a0a0a"); // Almost Black Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#ff5733"); // Vibrant Orange Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#0a0a0a"); // Almost Black Button Text
        root.style.setProperty("--color-btnSecondary", "#0a0a0a"); // Almost Black Button
        root.style.setProperty("--color-btnHoverSecondary", "#39ff14"); // Matrix Green Button Hover
        root.style.setProperty("--color-sectionTitle", "#ffffff"); // White Section Title
        root.style.setProperty("--color-sectionSubtitle", "#39ff14"); // Matrix Green Section Subtitle
        root.style.setProperty("--color-textPrimary", "#ffffff"); // White Text
        root.style.setProperty("--color-textSecondary", "#ff5733"); // Vibrant Orange Text
        root.style.setProperty("--color-textInPrimary", "#0a0a0a"); // Almost Black Text in Primary
        root.style.setProperty("--color-navbarBg", "#121212"); // Very Dark Gray Navbar Background
        root.style.setProperty("--color-navbarText", "#ffffff"); // White Navbar Text
        root.style.setProperty("--color-navbarActive", "#39ff14"); // Matrix Green Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#ff5733"); // Vibrant Orange Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#ffffff"); // White Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#39ff14"); // Matrix Green Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#121212"); // Very Dark Gray Card Background
        root.style.setProperty("--color-cardBgSecondary", "#1a1a1a"); // Dark Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#ffffff"); // White Card Text
        root.style.setProperty("--color-cardTextSecondary", "#39ff14"); // Matrix Green Card Text
        root.style.setProperty("--color-cardBorder", "#ff5733"); // Vibrant Orange Card Border
        root.style.setProperty("--color-cardBorderHover", "#39ff14"); // Matrix Green Card Border Hover
        root.style.setProperty("--color-footerBg", "#121212"); // Very Dark Gray Footer Background
        root.style.setProperty("--color-footerTitle", "#ffffff"); // White Footer Title
        root.style.setProperty("--color-footerText", "#39ff14"); // Matrix Green Footer Text
        root.style.setProperty("--color-footerBorder", "#ff5733"); // Vibrant Orange Footer Border
        break;
      case "theme8":
        root.style.setProperty("--color-primary", "#5d5c61"); // Galactic Gray
        root.style.setProperty("--color-secondary", "#379683"); // Mint Green
        root.style.setProperty("--color-accent", "#7395ae"); // Cool Blue
        root.style.setProperty("--color-mainBg", "#557a95"); // Slate Blue Background
        root.style.setProperty("--color-btnPrimary", "#7395ae"); // Cool Blue Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#379683"); // Mint Green Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#5d5c61"); // Galactic Gray Button
        root.style.setProperty("--color-btnHoverSecondary", "#7395ae"); // Cool Blue Button Hover
        root.style.setProperty("--color-sectionTitle", "#ffffff"); // White Section Title
        root.style.setProperty("--color-sectionSubtitle", "#7395ae"); // Cool Blue Section Subtitle
        root.style.setProperty("--color-textPrimary", "#ffffff"); // White Text
        root.style.setProperty("--color-textSecondary", "#379683"); // Mint Green Text
        root.style.setProperty("--color-textInPrimary", "#5d5c61"); // Galactic Gray Text in Primary
        root.style.setProperty("--color-navbarBg", "#557a95"); // Slate Blue Navbar Background
        root.style.setProperty("--color-navbarText", "#ffffff"); // White Navbar Text
        root.style.setProperty("--color-navbarActive", "#7395ae"); // Cool Blue Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#379683"); // Mint Green Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#ffffff"); // White Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#7395ae"); // Cool Blue Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#557a95"); // Slate Blue Card Background
        root.style.setProperty("--color-cardBgSecondary", "#5d5c61"); // Galactic Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#ffffff"); // White Card Text
        root.style.setProperty("--color-cardTextSecondary", "#379683"); // Mint Green Card Text
        root.style.setProperty("--color-cardBorder", "#7395ae"); // Cool Blue Card Border
        root.style.setProperty("--color-cardBorderHover", "#379683"); // Mint Green Card Border Hover
        root.style.setProperty("--color-footerBg", "#5d5c61"); // Galactic Gray Footer Background
        root.style.setProperty("--color-footerTitle", "#ffffff"); // White Footer Title
        root.style.setProperty("--color-footerText", "#379683"); // Mint Green Footer Text
        root.style.setProperty("--color-footerBorder", "#7395ae"); // Cool Blue Footer Border
        break;
      case "theme9":
        root.style.setProperty("--color-primary", "#0077be");
        root.style.setProperty("--color-secondary", "#00ffff");
        root.style.setProperty("--color-accent", "#ff00ff");
        root.style.setProperty("--color-mainBg", "#001a33");
        root.style.setProperty("--color-btnPrimary", "#0077be");
        root.style.setProperty("--color-btnTextPrimary", "#ffffff");
        root.style.setProperty("--color-btnHoverPrimary", "#005c99");
        root.style.setProperty("--color-btnSecondary", "#00ffff");
        root.style.setProperty("--color-btnTextSecondary", "#001a33");
        root.style.setProperty("--color-btnHoverSecondary", "#00cccc");
        root.style.setProperty("--color-sectionTitle", "#ffffff");
        root.style.setProperty("--color-sectionSubtitle", "#00ffff");
        root.style.setProperty("--color-textPrimary", "#ffffff");
        root.style.setProperty("--color-textSecondary", "#99ccff");
        root.style.setProperty("--color-textInPrimary", "#001a33");
        root.style.setProperty("--color-navbarBg", "#003366");
        root.style.setProperty("--color-navbarText", "#ffffff");
        root.style.setProperty("--color-navbarActive", "#00ffff");
        root.style.setProperty("--color-navbarBorder", "#0077be");
        root.style.setProperty("--color-bannerTextPrimary", "#ffffff");
        root.style.setProperty("--color-bannerTextSecondary", "#00ffff");
        root.style.setProperty("--color-cardBgPrimary", "#002b4d");
        root.style.setProperty("--color-cardBgSecondary", "#003366");
        root.style.setProperty("--color-cardTextPrimary", "#ffffff");
        root.style.setProperty("--color-cardTextSecondary", "#99ccff");
        root.style.setProperty("--color-cardBorder", "#0077be");
        root.style.setProperty("--color-cardBorderHover", "#00ffff");
        root.style.setProperty("--color-footerBg", "#001a33");
        root.style.setProperty("--color-footerTitle", "#00ffff");
        root.style.setProperty("--color-footerText", "#ffffff");
        root.style.setProperty("--color-footerBorder", "#0077be");
        break;
      case "theme10":
        root.style.setProperty("--color-primary", "#ff00ff");
        root.style.setProperty("--color-secondary", "#00ff00");
        root.style.setProperty("--color-accent", "#ffff00");
        root.style.setProperty("--color-mainBg", "#1a0033");
        root.style.setProperty("--color-btnPrimary", "#ff00ff");
        root.style.setProperty("--color-btnTextPrimary", "#000000");
        root.style.setProperty("--color-btnHoverPrimary", "#cc00cc");
        root.style.setProperty("--color-btnSecondary", "#00ff00");
        root.style.setProperty("--color-btnTextSecondary", "#000000");
        root.style.setProperty("--color-btnHoverSecondary", "#00cc00");
        root.style.setProperty("--color-sectionTitle", "#ffffff");
        root.style.setProperty("--color-sectionSubtitle", "#ffff00");
        root.style.setProperty("--color-textPrimary", "#ffffff");
        root.style.setProperty("--color-textSecondary", "#ff00ff");
        root.style.setProperty("--color-textInPrimary", "#000000");
        root.style.setProperty("--color-navbarBg", "#330066");
        root.style.setProperty("--color-navbarText", "#00ff00");
        root.style.setProperty("--color-navbarActive", "#ffff00");
        root.style.setProperty("--color-navbarBorder", "#ff00ff");
        root.style.setProperty("--color-bannerTextPrimary", "#ffffff");
        root.style.setProperty("--color-bannerTextSecondary", "#00ff00");
        root.style.setProperty("--color-cardBgPrimary", "#2b0052");
        root.style.setProperty("--color-cardBgSecondary", "#330066");
        root.style.setProperty("--color-cardTextPrimary", "#ffffff");
        root.style.setProperty("--color-cardTextSecondary", "#ff00ff");
        root.style.setProperty("--color-cardBorder", "#00ff00");
        root.style.setProperty("--color-cardBorderHover", "#ffff00");
        root.style.setProperty("--color-footerBg", "#1a0033");
        root.style.setProperty("--color-footerTitle", "#ffff00");
        root.style.setProperty("--color-footerText", "#00ff00");
        root.style.setProperty("--color-footerBorder", "#ff00ff");
        break;
      case "theme11":
        root.style.setProperty("--color-primary", "#3498db");
        root.style.setProperty("--color-secondary", "#e74c3c");
        root.style.setProperty("--color-accent", "#f1c40f");
        root.style.setProperty("--color-mainBg", "#2c3e50");
        root.style.setProperty("--color-btnPrimary", "#3498db");
        root.style.setProperty("--color-btnTextPrimary", "#ffffff");
        root.style.setProperty("--color-btnHoverPrimary", "#2980b9");
        root.style.setProperty("--color-btnSecondary", "#e74c3c");
        root.style.setProperty("--color-btnTextSecondary", "#ffffff");
        root.style.setProperty("--color-btnHoverSecondary", "#c0392b");
        root.style.setProperty("--color-sectionTitle", "#ecf0f1");
        root.style.setProperty("--color-sectionSubtitle", "#bdc3c7");
        root.style.setProperty("--color-textPrimary", "#ecf0f1");
        root.style.setProperty("--color-textSecondary", "#bdc3c7");
        root.style.setProperty("--color-textInPrimary", "#2c3e50");
        root.style.setProperty("--color-navbarBg", "#34495e");
        root.style.setProperty("--color-navbarText", "#ecf0f1");
        root.style.setProperty("--color-navbarActive", "#f1c40f");
        root.style.setProperty("--color-navbarBorder", "#3498db");
        root.style.setProperty("--color-bannerTextPrimary", "#ffffff");
        root.style.setProperty("--color-bannerTextSecondary", "#3498db");
        root.style.setProperty("--color-cardBgPrimary", "#34495e");
        root.style.setProperty("--color-cardBgSecondary", "#2c3e50");
        root.style.setProperty("--color-cardTextPrimary", "#ecf0f1");
        root.style.setProperty("--color-cardTextSecondary", "#bdc3c7");
        root.style.setProperty("--color-cardBorder", "#3498db");
        root.style.setProperty("--color-cardBorderHover", "#e74c3c");
        root.style.setProperty("--color-footerBg", "#2c3e50");
        root.style.setProperty("--color-footerTitle", "#f1c40f");
        root.style.setProperty("--color-footerText", "#ecf0f1");
        root.style.setProperty("--color-footerBorder", "#3498db");
        break;
      case "theme12":
        root.style.setProperty("--color-primary", "#4c6ef5"); // Soft Blue
        root.style.setProperty("--color-secondary", "#74c0fc"); // Light Blue
        root.style.setProperty("--color-accent", "#d0ebff"); // Very Light Blue
        root.style.setProperty("--color-mainBg", "#e7f5ff"); // Pale Blue Background
        root.style.setProperty("--color-btnPrimary", "#4c6ef5"); // Soft Blue Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#74c0fc"); // Light Blue Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#d0ebff"); // Very Light Blue Button
        root.style.setProperty("--color-btnHoverSecondary", "#4c6ef5"); // Soft Blue Button Hover
        root.style.setProperty("--color-sectionTitle", "#212529"); // Dark Gray Section Title
        root.style.setProperty("--color-sectionSubtitle", "#4c6ef5"); // Soft Blue Section Subtitle
        root.style.setProperty("--color-textPrimary", "#212529"); // Dark Gray Text
        root.style.setProperty("--color-textSecondary", "#74c0fc"); // Light Blue Text
        root.style.setProperty("--color-textInPrimary", "#ffffff"); // White Text in Primary
        root.style.setProperty("--color-navbarBg", "#e7f5ff"); // Pale Blue Navbar Background
        root.style.setProperty("--color-navbarText", "#212529"); // Dark Gray Navbar Text
        root.style.setProperty("--color-navbarActive", "#4c6ef5"); // Soft Blue Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#74c0fc"); // Light Blue Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#212529"); // Dark Gray Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#4c6ef5"); // Soft Blue Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#ffffff"); // White Card Background
        root.style.setProperty("--color-cardBgSecondary", "#f8f9fa"); // Light Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#212529"); // Dark Gray Card Text
        root.style.setProperty("--color-cardTextSecondary", "#74c0fc"); // Light Blue Card Text
        root.style.setProperty("--color-cardBorder", "#4c6ef5"); // Soft Blue Card Border
        root.style.setProperty("--color-cardBorderHover", "#74c0fc"); // Light Blue Card Border Hover
        root.style.setProperty("--color-footerBg", "#e7f5ff"); // Pale Blue Footer Background
        root.style.setProperty("--color-footerTitle", "#212529"); // Dark Gray Footer Title
        root.style.setProperty("--color-footerText", "#4c6ef5"); // Soft Blue Footer Text
        root.style.setProperty("--color-footerBorder", "#74c0fc"); // Light Blue Footer Border
        break;
      case "theme13":
        root.style.setProperty("--color-primary", "#20c997"); // Mint Green
        root.style.setProperty("--color-secondary", "#38d9a9"); // Lighter Mint Green
        root.style.setProperty("--color-accent", "#e6fcf5"); // Very Light Mint
        root.style.setProperty("--color-mainBg", "#f4fdf8"); // Pale Mint Background
        root.style.setProperty("--color-btnPrimary", "#20c997"); // Mint Green Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#38d9a9"); // Lighter Mint Green Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#e6fcf5"); // Very Light Mint Button
        root.style.setProperty("--color-btnHoverSecondary", "#20c997"); // Mint Green Button Hover
        root.style.setProperty("--color-sectionTitle", "#212529"); // Dark Gray Section Title
        root.style.setProperty("--color-sectionSubtitle", "#20c997"); // Mint Green Section Subtitle
        root.style.setProperty("--color-textPrimary", "#212529"); // Dark Gray Text
        root.style.setProperty("--color-textSecondary", "#38d9a9"); // Lighter Mint Green Text
        root.style.setProperty("--color-textInPrimary", "#ffffff"); // White Text in Primary
        root.style.setProperty("--color-navbarBg", "#f4fdf8"); // Pale Mint Navbar Background
        root.style.setProperty("--color-navbarText", "#212529"); // Dark Gray Navbar Text
        root.style.setProperty("--color-navbarActive", "#20c997"); // Mint Green Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#38d9a9"); // Lighter Mint Green Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#212529"); // Dark Gray Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#20c997"); // Mint Green Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#ffffff"); // White Card Background
        root.style.setProperty("--color-cardBgSecondary", "#f8f9fa"); // Light Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#212529"); // Dark Gray Card Text
        root.style.setProperty("--color-cardTextSecondary", "#38d9a9"); // Lighter Mint Green Card Text
        root.style.setProperty("--color-cardBorder", "#20c997"); // Mint Green Card Border
        root.style.setProperty("--color-cardBorderHover", "#38d9a9"); // Lighter Mint Green Card Border Hover
        root.style.setProperty("--color-footerBg", "#f4fdf8"); // Pale Mint Footer Background
        root.style.setProperty("--color-footerTitle", "#212529"); // Dark Gray Footer Title
        root.style.setProperty("--color-footerText", "#20c997"); // Mint Green Footer Text
        root.style.setProperty("--color-footerBorder", "#38d9a9"); // Lighter Mint Green Footer Border
        break;
      case "theme14":
        root.style.setProperty("--color-primary", "#b197fc"); // Soft Lavender
        root.style.setProperty("--color-secondary", "#d0bfff"); // Lighter Lavender
        root.style.setProperty("--color-accent", "#f3f0ff"); // Very Light Lavender
        root.style.setProperty("--color-mainBg", "#f8f9fc"); // Pale Lavender Background
        root.style.setProperty("--color-btnPrimary", "#b197fc"); // Soft Lavender Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#d0bfff"); // Lighter Lavender Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#f3f0ff"); // Very Light Lavender Button
        root.style.setProperty("--color-btnHoverSecondary", "#b197fc"); // Soft Lavender Button Hover
        root.style.setProperty("--color-sectionTitle", "#212529"); // Dark Gray Section Title
        root.style.setProperty("--color-sectionSubtitle", "#b197fc"); // Soft Lavender Section Subtitle
        root.style.setProperty("--color-textPrimary", "#212529"); // Dark Gray Text
        root.style.setProperty("--color-textSecondary", "#d0bfff"); // Lighter Lavender Text
        root.style.setProperty("--color-textInPrimary", "#ffffff"); // White Text in Primary
        root.style.setProperty("--color-navbarBg", "#f8f9fc"); // Pale Lavender Navbar Background
        root.style.setProperty("--color-navbarText", "#212529"); // Dark Gray Navbar Text
        root.style.setProperty("--color-navbarActive", "#b197fc"); // Soft Lavender Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#d0bfff"); // Lighter Lavender Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#212529"); // Dark Gray Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#b197fc"); // Soft Lavender Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#ffffff"); // White Card Background
        root.style.setProperty("--color-cardBgSecondary", "#f8f9fa"); // Light Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#212529"); // Dark Gray Card Text
        root.style.setProperty("--color-cardTextSecondary", "#d0bfff"); // Lighter Lavender Card Text
        root.style.setProperty("--color-cardBorder", "#b197fc"); // Soft Lavender Card Border
        root.style.setProperty("--color-cardBorderHover", "#d0bfff"); // Lighter Lavender Card Border Hover
        root.style.setProperty("--color-footerBg", "#f8f9fc"); // Pale Lavender Footer Background
        root.style.setProperty("--color-footerTitle", "#212529"); // Dark Gray Footer Title
        root.style.setProperty("--color-footerText", "#b197fc"); // Soft Lavender Footer Text
        root.style.setProperty("--color-footerBorder", "#d0bfff"); // Lighter Lavender Footer Border
        break;
      case "theme15":
        root.style.setProperty("--color-primary", "#ff6b6b"); // Light Coral
        root.style.setProperty("--color-secondary", "#ff8787"); // Soft Pink
        root.style.setProperty("--color-accent", "#ffe3e3"); // Very Light Pink
        root.style.setProperty("--color-mainBg", "#fff5f5"); // Pale Pink Background
        root.style.setProperty("--color-btnPrimary", "#ff6b6b"); // Light Coral Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#ff8787"); // Soft Pink Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#ffe3e3"); // Very Light Pink Button
        root.style.setProperty("--color-btnHoverSecondary", "#ff6b6b"); // Light Coral Button Hover
        root.style.setProperty("--color-sectionTitle", "#212529"); // Dark Gray Section Title
        root.style.setProperty("--color-sectionSubtitle", "#ff6b6b"); // Light Coral Section Subtitle
        root.style.setProperty("--color-textPrimary", "#212529"); // Dark Gray Text
        root.style.setProperty("--color-textSecondary", "#ff8787"); // Soft Pink Text
        root.style.setProperty("--color-textInPrimary", "#ffffff"); // White Text in Primary
        root.style.setProperty("--color-navbarBg", "#fff5f5"); // Pale Pink Navbar Background
        root.style.setProperty("--color-navbarText", "#212529"); // Dark Gray Navbar Text
        root.style.setProperty("--color-navbarActive", "#ff6b6b"); // Light Coral Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#ff8787"); // Soft Pink Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#212529"); // Dark Gray Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#ff6b6b"); // Light Coral Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#ffffff"); // White Card Background
        root.style.setProperty("--color-cardBgSecondary", "#f8f9fa"); // Light Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#212529"); // Dark Gray Card Text
        root.style.setProperty("--color-cardTextSecondary", "#ff8787"); // Soft Pink Card Text
        root.style.setProperty("--color-cardBorder", "#ff6b6b"); // Light Coral Card Border
        root.style.setProperty("--color-cardBorderHover", "#ff8787"); // Soft Pink Card Border Hover
        root.style.setProperty("--color-footerBg", "#fff5f5"); // Pale Pink Footer Background
        root.style.setProperty("--color-footerTitle", "#212529"); // Dark Gray Footer Title
        root.style.setProperty("--color-footerText", "#ff6b6b"); // Light Coral Footer Text
        root.style.setProperty("--color-footerBorder", "#ff8787"); // Soft Pink Footer Border
        break;
      case "theme16":
        root.style.setProperty("--color-primary", "#00b4d8"); // Aqua Blue
        root.style.setProperty("--color-secondary", "#90e0ef"); // Light Aqua
        root.style.setProperty("--color-accent", "#caf0f8"); // Very Light Aqua
        root.style.setProperty("--color-mainBg", "#e0fbfc"); // Pale Aqua Background
        root.style.setProperty("--color-btnPrimary", "#00b4d8"); // Aqua Blue Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#90e0ef"); // Light Aqua Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#caf0f8"); // Very Light Aqua Button
        root.style.setProperty("--color-btnHoverSecondary", "#00b4d8"); // Aqua Blue Button Hover
        root.style.setProperty("--color-sectionTitle", "#212529"); // Dark Gray Section Title
        root.style.setProperty("--color-sectionSubtitle", "#00b4d8"); // Aqua Blue Section Subtitle
        root.style.setProperty("--color-textPrimary", "#212529"); // Dark Gray Text
        root.style.setProperty("--color-textSecondary", "#90e0ef"); // Light Aqua Text
        root.style.setProperty("--color-textInPrimary", "#ffffff"); // White Text in Primary
        root.style.setProperty("--color-navbarBg", "#e0fbfc"); // Pale Aqua Navbar Background
        root.style.setProperty("--color-navbarText", "#212529"); // Dark Gray Navbar Text
        root.style.setProperty("--color-navbarActive", "#00b4d8"); // Aqua Blue Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#90e0ef"); // Light Aqua Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#212529"); // Dark Gray Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#00b4d8"); // Aqua Blue Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#ffffff"); // White Card Background
        root.style.setProperty("--color-cardBgSecondary", "#f8f9fa"); // Light Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#212529"); // Dark Gray Card Text
        root.style.setProperty("--color-cardTextSecondary", "#90e0ef"); // Light Aqua Card Text
        root.style.setProperty("--color-cardBorder", "#00b4d8"); // Aqua Blue Card Border
        root.style.setProperty("--color-cardBorderHover", "#90e0ef"); // Light Aqua Card Border Hover
        root.style.setProperty("--color-footerBg", "#e0fbfc"); // Pale Aqua Footer Background
        root.style.setProperty("--color-footerTitle", "#212529"); // Dark Gray Footer Title
        root.style.setProperty("--color-footerText", "#00b4d8"); // Aqua Blue Footer Text
        root.style.setProperty("--color-footerBorder", "#90e0ef"); // Light Aqua Footer Border
        break;
      case "theme17":
        root.style.setProperty("--color-primary", "#ff8c00"); // Vivid Orange
        root.style.setProperty("--color-secondary", "#ffa500"); // Bright Orange
        root.style.setProperty("--color-accent", "#ffd700"); // Gold
        root.style.setProperty("--color-mainBg", "#fffacd"); // Light Golden Background
        root.style.setProperty("--color-btnPrimary", "#ff8c00"); // Vivid Orange Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#ffa500"); // Bright Orange Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#ffd700"); // Gold Button
        root.style.setProperty("--color-btnHoverSecondary", "#ff8c00"); // Vivid Orange Button Hover
        root.style.setProperty("--color-sectionTitle", "#212529"); // Dark Gray Section Title
        root.style.setProperty("--color-sectionSubtitle", "#ff8c00"); // Vivid Orange Section Subtitle
        root.style.setProperty("--color-textPrimary", "#212529"); // Dark Gray Text
        root.style.setProperty("--color-textSecondary", "#ffa500"); // Bright Orange Text
        root.style.setProperty("--color-textInPrimary", "#ffffff"); // White Text in Primary
        root.style.setProperty("--color-navbarBg", "#fffacd"); // Light Golden Navbar Background
        root.style.setProperty("--color-navbarText", "#212529"); // Dark Gray Navbar Text
        root.style.setProperty("--color-navbarActive", "#ff8c00"); // Vivid Orange Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#ffa500"); // Bright Orange Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#212529"); // Dark Gray Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#ff8c00"); // Vivid Orange Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#ffffff"); // White Card Background
        root.style.setProperty("--color-cardBgSecondary", "#f8f9fa"); // Light Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#212529"); // Dark Gray Card Text
        root.style.setProperty("--color-cardTextSecondary", "#ffa500"); // Bright Orange Card Text
        root.style.setProperty("--color-cardBorder", "#ff8c00"); // Vivid Orange Card Border
        root.style.setProperty("--color-cardBorderHover", "#ffa500"); // Bright Orange Card Border Hover
        root.style.setProperty("--color-footerBg", "#fffacd"); // Light Golden Footer Background
        root.style.setProperty("--color-footerTitle", "#212529"); // Dark Gray Footer Title
        root.style.setProperty("--color-footerText", "#ff8c00"); // Vivid Orange Footer Text
        root.style.setProperty("--color-footerBorder", "#ffa500"); // Bright Orange Footer Border
        break;
      case "theme18":
        root.style.setProperty("--color-primary", "#00aaff"); // Frost Blue
        root.style.setProperty("--color-secondary", "#66ccff"); // Light Frost Blue
        root.style.setProperty("--color-accent", "#cceeff"); // Very Light Frost Blue
        root.style.setProperty("--color-mainBg", "#f0faff"); // Pale Frost Blue Background
        root.style.setProperty("--color-btnPrimary", "#00aaff"); // Frost Blue Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#66ccff"); // Light Frost Blue Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#cceeff"); // Very Light Frost Blue Button
        root.style.setProperty("--color-btnHoverSecondary", "#00aaff"); // Frost Blue Button Hover
        root.style.setProperty("--color-sectionTitle", "#212529"); // Dark Gray Section Title
        root.style.setProperty("--color-sectionSubtitle", "#00aaff"); // Frost Blue Section Subtitle
        root.style.setProperty("--color-textPrimary", "#212529"); // Dark Gray Text
        root.style.setProperty("--color-textSecondary", "#66ccff"); // Light Frost Blue Text
        root.style.setProperty("--color-textInPrimary", "#ffffff"); // White Text in Primary
        root.style.setProperty("--color-navbarBg", "#f0faff"); // Pale Frost Blue Navbar Background
        root.style.setProperty("--color-navbarText", "#212529"); // Dark Gray Navbar Text
        root.style.setProperty("--color-navbarActive", "#00aaff"); // Frost Blue Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#66ccff"); // Light Frost Blue Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#212529"); // Dark Gray Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#00aaff"); // Frost Blue Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#ffffff"); // White Card Background
        root.style.setProperty("--color-cardBgSecondary", "#f8f9fa"); // Light Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#212529"); // Dark Gray Card Text
        root.style.setProperty("--color-cardTextSecondary", "#66ccff"); // Light Frost Blue Card Text
        root.style.setProperty("--color-cardBorder", "#00aaff"); // Frost Blue Card Border
        root.style.setProperty("--color-cardBorderHover", "#66ccff"); // Light Frost Blue Card Border Hover
        root.style.setProperty("--color-footerBg", "#f0faff"); // Pale Frost Blue Footer Background
        root.style.setProperty("--color-footerTitle", "#212529"); // Dark Gray Footer Title
        root.style.setProperty("--color-footerText", "#00aaff"); // Frost Blue Footer Text
        root.style.setProperty("--color-footerBorder", "#66ccff"); // Light Frost Blue Footer Border
        break;
      case "theme19":
        root.style.setProperty("--color-primary", "#ff7e5f"); // Coral
        root.style.setProperty("--color-secondary", "#feb47b"); // Soft Coral
        root.style.setProperty("--color-accent", "#ffe1c4"); // Very Light Coral
        root.style.setProperty("--color-mainBg", "#fff5eb"); // Pale Coral Background
        root.style.setProperty("--color-btnPrimary", "#ff7e5f"); // Coral Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#feb47b"); // Soft Coral Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#ffe1c4"); // Very Light Coral Button
        root.style.setProperty("--color-btnHoverSecondary", "#ff7e5f"); // Coral Button Hover
        root.style.setProperty("--color-sectionTitle", "#212529"); // Dark Gray Section Title
        root.style.setProperty("--color-sectionSubtitle", "#ff7e5f"); // Coral Section Subtitle
        root.style.setProperty("--color-textPrimary", "#212529"); // Dark Gray Text
        root.style.setProperty("--color-textSecondary", "#feb47b"); // Soft Coral Text
        root.style.setProperty("--color-textInPrimary", "#ffffff"); // White Text in Primary
        root.style.setProperty("--color-navbarBg", "#fff5eb"); // Pale Coral Navbar Background
        root.style.setProperty("--color-navbarText", "#212529"); // Dark Gray Navbar Text
        root.style.setProperty("--color-navbarActive", "#ff7e5f"); // Coral Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#feb47b"); // Soft Coral Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#212529"); // Dark Gray Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#ff7e5f"); // Coral Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#ffffff"); // White Card Background
        root.style.setProperty("--color-cardBgSecondary", "#f8f9fa"); // Light Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#212529"); // Dark Gray Card Text
        root.style.setProperty("--color-cardTextSecondary", "#feb47b"); // Soft Coral Card Text
        root.style.setProperty("--color-cardBorder", "#ff7e5f"); // Coral Card Border
        root.style.setProperty("--color-cardBorderHover", "#feb47b"); // Soft Coral Card Border Hover
        root.style.setProperty("--color-footerBg", "#fff5eb"); // Pale Coral Footer Background
        root.style.setProperty("--color-footerTitle", "#212529"); // Dark Gray Footer Title
        root.style.setProperty("--color-footerText", "#ff7e5f"); // Coral Footer Text
        root.style.setProperty("--color-footerBorder", "#feb47b"); // Soft Coral Footer Border
        break;
      case "theme20":
        root.style.setProperty("--color-primary", "#ff4e50"); // Vivid Red
        root.style.setProperty("--color-secondary", "#fc913a"); // Bright Orange
        root.style.setProperty("--color-accent", "#f9d423"); // Bright Yellow
        root.style.setProperty("--color-mainBg", "#ffffff"); // White Background
        root.style.setProperty("--color-btnPrimary", "#ff4e50"); // Vivid Red Button
        root.style.setProperty("--color-btnTextPrimary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnHoverPrimary", "#fc913a"); // Bright Orange Button Hover
        root.style.setProperty("--color-btnTextSecondary", "#ffffff"); // White Button Text
        root.style.setProperty("--color-btnSecondary", "#f9d423"); // Bright Yellow Button
        root.style.setProperty("--color-btnHoverSecondary", "#ff4e50"); // Vivid Red Button Hover
        root.style.setProperty("--color-sectionTitle", "#2c3e50"); // Dark Gray Section Title
        root.style.setProperty("--color-sectionSubtitle", "#fc913a"); // Bright Orange Section Subtitle
        root.style.setProperty("--color-textPrimary", "#2c3e50"); // Dark Gray Text
        root.style.setProperty("--color-textSecondary", "#f9d423"); // Bright Yellow Text
        root.style.setProperty("--color-textInPrimary", "#ffffff"); // White Text in Primary
        root.style.setProperty("--color-navbarBg", "#ffffff"); // White Navbar Background
        root.style.setProperty("--color-navbarText", "#2c3e50"); // Dark Gray Navbar Text
        root.style.setProperty("--color-navbarActive", "#ff4e50"); // Vivid Red Active Navbar Item
        root.style.setProperty("--color-navbarBorder", "#fc913a"); // Bright Orange Navbar Border
        root.style.setProperty("--color-bannerTextPrimary", "#2c3e50"); // Dark Gray Banner Text
        root.style.setProperty("--color-bannerTextSecondary", "#ff4e50"); // Vivid Red Banner Text
        root.style.setProperty("--color-cardBgPrimary", "#ffffff"); // White Card Background
        root.style.setProperty("--color-cardBgSecondary", "#f8f9fa"); // Light Gray Card Background
        root.style.setProperty("--color-cardTextPrimary", "#2c3e50"); // Dark Gray Card Text
        root.style.setProperty("--color-cardTextSecondary", "#fc913a"); // Bright Orange Card Text
        root.style.setProperty("--color-cardBorder", "#ff4e50"); // Vivid Red Card Border
        root.style.setProperty("--color-cardBorderHover", "#fc913a"); // Bright Orange Card Border Hover
        root.style.setProperty("--color-footerBg", "#ffffff"); // White Footer Background
        root.style.setProperty("--color-footerTitle", "#2c3e50"); // Dark Gray Footer Title
        root.style.setProperty("--color-footerText", "#ff4e50"); // Vivid Red Footer Text
        root.style.setProperty("--color-footerBorder", "#fc913a"); // Bright Orange Footer Border
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
