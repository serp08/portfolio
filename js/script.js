const root = document.documentElement;
const skills = document.querySelector('.skills-list');

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

skills.addEventListener('click', function(event){
    if(event.target.type === 'button'){
        if(event.target.id === 'skills'){
            document.getElementById('languages', 'frameworks', 'devtools').style.display = 'block';
        }
    }
});