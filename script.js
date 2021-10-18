const navcont = document.querySelector('.navbar-container');
const navbar = document.querySelector('.nav-bar');
const navlinks = document.querySelector('.nav-links');
const btn = document.getElementById('nav-btn');
const icon = document.querySelector('.fas.fa-bars');

var typed = new Typed('.type', {
    strings: ['Web Developer.', 'Discord Verified Bot Developer.', 'Designer.', 'Pythoneer.', 'Content Creator.', 'Student.'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    navlinks.classList.toggle("expand");
    navcont.classList.toggle("expand");
    navbar.classList.toggle("expand");
    icon.classList.toggle("fa-times");
});
