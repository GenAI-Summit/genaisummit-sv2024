const ScrollToSection = (section) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default ScrollToSection;
