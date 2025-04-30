/* 
    File: js/script.js
    Description: JavaScript for the Found + Forgiven website.
    Author: William Harkley
    Date Modified: 4/27/2025
*/

// Hamburger Menu Toggle
const hamburgerButton = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
    navMenu.classList.toggle('active');
});


