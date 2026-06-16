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



//Dark mode
// const toggle = document.getElementById('darkModeToggle');
// const icon = toggle.querySelector('i');

// if (localStorage.getItem('theme') === 'dark') {
//     body.classList.add('dark-mode');
// }
// toggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');

//     if (document.body.classList.contains('dark-mode')) {
//         icon.classList.remove('fa-sun');
//         icon.classList.add('fa-moon');
//     } else {
//         icon.classList.remove('fa-moon');
//         icon.classList.add('fa-sun');
//     }
// });
const body = document.body;
const toggle = document.getElementById('darkModeToggle');
const icon = toggle.querySelector('i');

// Load saved preference on page load
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
} else {
    body.classList.remove('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Toggle on click
toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');

    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});


