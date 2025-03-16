function setTheme(theme) {
    const root = document.documentElement;
    const h1 = document.querySelector('h1');
    const h2s = document.querySelectorAll('h2');
    const h3s = document.querySelectorAll('h3');
    const links = document.querySelectorAll('a');
    const navLinks = document.querySelectorAll('nav a');
    const aside = document.getElementById('skill-aside');
    const ths = document.querySelectorAll('th');
    const labels = document.querySelectorAll('label');
    const form = document.getElementById('contact-form');
    const commentLength = document.getElementById('comment-length');
    const commentCount = document.getElementById('comment-count')

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
        if (aside) {
            aside.style.setProperty('color', 'black');
        }
        labels.forEach(element => {
            element.style.setProperty('color', 'black');
        });
        ths.forEach(element => {
            element.style.setProperty('color', 'var(--main-bg-color)');
        });
        if(form) {
            form.style.setProperty("background-color", 'var(--form-bg-color-dark)');
        }
        if(commentCount) {
            commentCount.style.setProperty('color', 'black');
        }
        if(commentLength) {
            commentLength.style.setProperty('color', 'black');
        }
    }
    else {
        root.style.setProperty('background', 'var(--bg-color-light)');
        root.style.setProperty('color', 'black');
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
        ths.forEach(element => {
            element.style.setProperty('color', 'var(--main-text-color)');
        });
        if(form) {
            form.style.setProperty("background-color", 'var(--form-bg-color-light)');
        }
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