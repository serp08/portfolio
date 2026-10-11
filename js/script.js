document.querySelector('.display-theme').addEventListener('click', function(event) {
    const root = document.documentElement;

    const toggle = event.target;
    const setTheme = (toggle.checked) ? 'dark' : 'light';
    root.className = setTheme;

    document.querySelector('.test').textContent = setTheme;
});