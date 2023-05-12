// dropdown
const dropdown = document.querySelector('#dropdown');
const navMenu = document.querySelector('#nav-menu');

dropdown.addEventListener('click', function() {
    dropdown.classList.toggle('dropdown-active');
    navMenu.classList.toggle('hidden');
});