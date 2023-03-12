/* Navbar */

const hamburgerBtn = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-link');

hamburgerBtn.addEventListener('click', function() {
    navLinksContainer.classList.toggle('nav-links-container-active');
})

navLinks.forEach(link => link.addEventListener('click', function() {
    if (navLinksContainer.classList.contains('nav-links-container-active')) {
        navLinksContainer.classList.remove('nav-links-container-active');
    } 
}))

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navLinksContainer.classList.remove('nav-links-container-active');
    }
})


