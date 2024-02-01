document.addEventListener("DOMContentLoaded", function() {
    var homeSectionHeight = document.getElementById("home").offsetHeight;
    var sections = document.querySelectorAll(".section");
  
    sections.forEach(function(section) {
      section.style.marginTop = homeSectionHeight + "px";
    });
  });
  
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  });