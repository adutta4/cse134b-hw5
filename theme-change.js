function setTheme(theme) {
    const root = document.documentElement;
    const h1 = document.querySelector('h1');
    const h2s = document.querySelectorAll('h2');
    const h3s = document.querySelectorAll('h3');

    if (theme === 'dark') {
        root.style.setProperty('background', 'var(--bg-color-dark)');
        root.style.setProperty('color', 'var(--text-color-dark)');
        h1.style.setProperty('color', 'var(--text-color-dark)');
        h2s.forEach(element => {
            element.style.setProperty('color', 'var(--text-color-dark)');
        });

        h3Elements.forEach(element => {
            element.style.setProperty('color', 'var(--text-color-dark)');
        });
    }
    else {
        root.style.setProperty('background', 'var(--bg-color-light)');
        root.style.setProperty('color', 'var(--text-color-light)');
        h1.style.setProperty('color', 'var(--main-text-color)');
        h2s.forEach(element => {
            element.style.setProperty('color', 'var(--main-text-color)');
        });

        h3Elements.forEach(element => {
            element.style.setProperty('color', 'var(--main-text-color)');
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