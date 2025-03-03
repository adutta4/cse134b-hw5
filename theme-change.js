function setTheme(theme) {
    const root = document.documentElement;
    const h1 = document.querySelector('h1');
    const h2s = document.querySelectorAll('h2');
    const h3s = document.querySelectorAll('h3');
    const links = document.querySelectorAll('a');
    const navLinks = document.querySelectorAll('nav a');
    const aside = document.getElementById('skill-aside');

    const toggle = document.getElementById("toggleLabel");
    if (toggle) {
        toggle.classList.remove("js-enabled");
    }

    if (theme === 'dark') {
        root.style.setProperty('background', 'var(--bg-color-dark)');
        root.style.setProperty('color', 'var(--text-color-dark)');
        h1.style.setProperty('color', 'var(--text-color-dark)');
        h2s.forEach(element => {
            element.style.setProperty('color', 'var(--text-color-dark)');
        });
        h3s.forEach(element => {
            element.style.setProperty('color', 'var(--text-color-dark)');
        });
        links.forEach(element => {
            element.style.setProperty('color', 'lightblue');
        });
        navLinks.forEach(element => {
            element.style.setProperty('color', 'var(--main-bg-color)');
        });
        aside.style.setProperty('color', 'black');

    }
    else {
        root.style.setProperty('background', 'var(--bg-color-light)');
        root.style.setProperty('color', 'var(--text-color-light)');
        h1.style.setProperty('color', 'var(--main-text-color)');
        h2s.forEach(element => {
            element.style.setProperty('color', 'var(--main-text-color)');
        });

        h3s.forEach(element => {
            element.style.setProperty('color', 'var(--main-text-color)');
        });
        links.forEach(element => {
            element.style.setProperty('color', 'blue');
        });
        navLinks.forEach(element => {
            element.style.setProperty('color', 'var(--main-bg-color)');
        });
    }
}
function toggleTheme() {
    const currTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

function setSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
        document.getElementById('themeToggle').checked = (savedTheme === 'dark');
    }
}

document.addEventListener('DOMContentLoaded', setSavedTheme);