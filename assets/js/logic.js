const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = '☀️';
    darkModeToggle.style.backgroundColor = '#222222';
    darkModeToggle.style.border = '2px solid #fff0f5';
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
    darkModeToggle.textContent = '🌙';
    darkModeToggle.style.backgroundColor = "#fff0f5";
    darkModeToggle.style.border = '2px solid #222222';
}