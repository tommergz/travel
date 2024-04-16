const chooseButtons = {
    travelers: document.getElementById('travelers'),
    organisations: document.getElementById('organisations'),
    employees: document.getElementById('employees'),
}

const activateBlock = () => {
    if(event) { 
        if (event.currentTarget.id === 'travelers') { localStorage.setItem('audience', 'travelers') }
        else if (event.currentTarget.id === 'organisations') { localStorage.setItem('audience', 'organisations') }
        else if (event.currentTarget.id === 'employees') { localStorage.setItem('audience', 'employees') }
    };
    const audience = localStorage.audience ? localStorage.audience : 'travelers';

    for (let key in chooseButtons) {
        if (chooseButtons.hasOwnProperty(key)) {
            chooseButtons[key].classList = key === audience ? 'choose-btn active-btn' : 'choose-btn passive-btn';
            document.getElementById(`${key}-container`).style.display = key === audience ? 'flex': 'none';
        }
    }    
}


for (let key in chooseButtons) {
    if (chooseButtons.hasOwnProperty(key)) {
        chooseButtons[key].addEventListener('click', activateBlock);
    }
}

activateBlock();
