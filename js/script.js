const root = document.documentElement;
const skills = document.querySelector('.skill-list');

window.onload = function(){
    // Loads the colour scheme user is using on their system by default
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        const sw = document.querySelector('.display-theme input');

        root.className = 'dark';
        sw.checked = true;
    }
    else{
        root.className = 'light';
    }
    
};

// Light/Dark mode toggle
document.querySelector('.display-theme').addEventListener('click', function(event) {
    const toggle = event.target;
    const setTheme = (toggle.checked) ? 'dark' : 'light';
    root.className = setTheme;
});

// Interactions with the skills list
skills.addEventListener('click', function(event){
    if(event.target.type === 'button'){ // Skill list tab
        // Remove prior selection indicator and change to current 'tab'
        const childrenList = document.querySelector('.skill-tabs').children;
        for(let i = 0; i < childrenList.length; i++) {
            const sel = childrenList[i];
            sel.className = (sel !== event.target)? sel.className.replace(" active", "") :
                (!sel.className.includes(" active")) ? sel.className + " active" : sel.className;
        };

        // Switch between the two tabs, depending on user selection
        if(event.target.id === 'skills'){
            document.querySelector('.fields').style.display = 'none';

            document.querySelector('.skills').style.display = 'flex';
        }
        else{
            document.querySelector('.skills').style.display = 'none';

            document.querySelector('.fields').style.display = 'block';
        }
    }
});