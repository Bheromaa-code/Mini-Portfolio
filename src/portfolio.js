const toggleBtn = document.getElementById('toggleBtn');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');
let isClicking = false;
function toggleBtnMenu() {
    // Instant toggle for better UX
    navMenu.classList.toggle('hidden');
    
    // Switch icons
    if (navMenu.classList.contains('hidden')) {
        menuIcon.classList.replace('fa-times', 'fa-bars');
    } else {
        menuIcon.classList.replace('fa-bars', 'fa-times');
    }
}
const closeMenu = () => {
    if (!isClicking && !navMenu.classList.contains('hidden')) {
        navMenu.classList.add('hidden');
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
};
toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    toggleBtnMenu();
});

window.addEventListener('scroll', () => {
    closeMenu();
});

// Close menu when clicking any link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        isClicking = false;
        closeMenu();
    });
});