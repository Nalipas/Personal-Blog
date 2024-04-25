const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Checks localStorage for 'dark mode' preference. This allows the stlying to persist through each page.
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

// Adds an event listener to the 'darkModeToggle' button to decide which function to run.
darkModeToggle.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Adds 'dark-mode' class to body element, enables 'dark mode', and applies styling specific to the button.
function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = '☀️';
    darkModeToggle.style.backgroundColor = '#222222';
    darkModeToggle.style.border = '2px solid #fff0f5';
}

// Removes 'dark-mode' class from body element, disables 'dark mode', and applies styling specific to the button.
function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
    darkModeToggle.textContent = '🌙';
    darkModeToggle.style.backgroundColor = "#fff0f5";
    darkModeToggle.style.border = '2px solid #222222';
}