const toggleBtn = document.getElementById('toggleBtn');
function toggleBtnMenu(){
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    setTimeout(() => {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('block');
    }, 10)
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
}
toggleBtn.addEventListener('click', toggleBtnMenu)