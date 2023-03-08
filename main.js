/* Navbar */

const hamburgerBtn = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-link');

hamburgerBtn.addEventListener('click', function() {
    navLinksContainer.classList.toggle('nav-links-container-active');
})


