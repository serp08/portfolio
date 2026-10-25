const root = document.documentElement;
const skills = document.querySelector('.skill-list');

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
        // Remove prior selection indicator
        const childrenList = document.querySelector('.skill-tabs').children;
        for(let i = 0; i < childrenList.length; i++) {
            childrenList[i].className = (childrenList[i] !== event.target)? childrenList[i].className.replace(" active", "") : childrenList[i].className + " active";
        };

        if(event.target.id === 'skills'){
            document.querySelector('.fields').style.display = 'none';

            const skills = document.querySelectorAll('.skills');
            skills.forEach((skillList) => {
                skillList.style.display = 'block';
            });
        }
        else{
            const skills = document.querySelectorAll('.skills');
            skills.forEach((skillList) => {
                skillList.style.display = 'none';
            });

            document.querySelector('.fields').style.display = 'block';
        }
    }
});