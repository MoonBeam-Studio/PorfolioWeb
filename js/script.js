const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const aboutImage = document.getElementById('about-image');

// Initial theme check
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(`${currentTheme}-theme`);
updateAboutImage(currentTheme);

// Theme toggle functionality
themeToggleBtn.addEventListener('click', () => {
    const isLightTheme = body.classList.contains('light-theme');

    if (isLightTheme) {
        body.classList.replace('light-theme', 'dark-theme');
        themeToggleBtn.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggleBtn.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light');
    }

    updateAboutImage(isLightTheme ? 'dark' : 'light');
});

// Function to update the about image based on the theme
function updateAboutImage(theme) {
    if (theme === 'light') {
        aboutImage.src = 'https://via.placeholder.com/300/ffffff/000000?text=About+Us+Light';
    } else {
        aboutImage.src = 'https://via.placeholder.com/300/000000/ffffff?text=About+Us+Dark';
    }
}
