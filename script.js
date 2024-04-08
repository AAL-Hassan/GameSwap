const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const mainContent = document.querySelector('main');

document.addEventListener('click', function(event) {
    if (!event.target.matches('.hamburger') && !event.target.matches('.hamburger *') && !event.target.matches('.nav-menu') && !event.target.matches('.nav-menu *')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        mainContent.classList.remove('main-content-push');
    }
});

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Toggle the class for the main content to push it when the menu is open
    mainContent.classList.toggle('main-content-push');
});
