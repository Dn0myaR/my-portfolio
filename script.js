const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

const sections = document.querySelectorAll("section");
const navLinks1 = document.querySelectorAll(".nav-links li a");
const underColor = document.querySelectorAll(".nav-links li a");

// Scrollspy effect
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
        }
    });

    navLinks1.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
        }
    });
    underColor.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
        }
    });
});

// Click effect (instant feedback)
navLinks1.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
