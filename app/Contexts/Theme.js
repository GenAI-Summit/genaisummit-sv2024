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
        root.style.setProperty("--color-btnHoverPrimary", "#ffffff");
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
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
