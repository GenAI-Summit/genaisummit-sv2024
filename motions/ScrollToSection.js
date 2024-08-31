const ScrollToSection = (section) => {
  console.log("section", section);
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default ScrollToSection;
