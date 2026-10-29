let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =  ()  => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}


const themeToggle = document.querySelector('#theme-toggle');
function updateThemeIcon() { const isLight = document.body.classList.contains('light-mode');
themeToggle.innerHTML = isLight
    ? '<i class="bx bx-sun"></i>'
    : '<i class="bx bx-moon"></i>';

themeToggle.setAttribute(
    'aria-label',
    isLight ? 'Switch to dark mode' : 'Switch to light mode'
);}
updateThemeIcon();
themeToggle.addEventListener('click', () => { document.body.classList.toggle('light-mode');
const isLight =
    document.body.classList.contains('light-mode');

localStorage.setItem(
    'theme',
    isLight ? 'light' : 'dark'
);

updateThemeIcon();});