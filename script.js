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


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('darkModeToggle');
  const knobIcon = document.querySelector('.knob i');
  const body = document.body;

  // Restore theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if (toggle) {
      toggle.checked = true;
      if (knobIcon) knobIcon.classList.replace('fa-sun', 'fa-moon');
    }
  }

  if (toggle) {
    toggle.addEventListener('change', () => {
      body.classList.toggle('dark-mode', toggle.checked);
      localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');

      if (knobIcon) {
        if (toggle.checked) {
          knobIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
          knobIcon.classList.replace('fa-moon', 'fa-sun');
        }
      }
    });
  }
});

//send email

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_qwf78a4', 'template_ilh84t2', this)
    .then(function() {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send message: ' + JSON.stringify(error));
    });
});


// const toggle = document.getElementById('darkModeToggle');
// const knobIcon = document.querySelector('.knob i');
// const body = document.body;

// // Load saved theme
// if (localStorage.getItem('theme') === 'dark') {
//   body.classList.add('dark-mode');
//   toggle.checked = true;
//   knobIcon.classList.replace('fa-sun', 'fa-moon');
// }

// toggle.addEventListener('change', () => {
//   body.classList.toggle('dark-mode', toggle.checked);
//   localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');

//   if (toggle.checked) {
//     knobIcon.classList.replace('fa-sun', 'fa-moon');
//   } else {
//     knobIcon.classList.replace('fa-moon', 'fa-sun');
//   }
// });



