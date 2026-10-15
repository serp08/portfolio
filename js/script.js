const root = document.documentElement;

window.onload = function(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        const sw = document.querySelector('.display-theme input');

        root.className = 'dark';
        sw.checked = true;
    }
    else{
        root.className = 'light';
    }
};


document.querySelector('.display-theme').addEventListener('click', function(event) {
    const toggle = event.target;
    const setTheme = (toggle.checked) ? 'dark' : 'light';
    root.className = setTheme;
});