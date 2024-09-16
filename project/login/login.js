(function() {
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    if(userdata !== null && userdata['username'] && userdata.isLoggedIn) {
        location.href = '/project/';
    }
})();

const onLogin = () => {
    const username = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    // Validation on frontend
    const isValid = validateLogin(username, password);
    if(!isValid) {
        return;
    }
    // If username and password fields are good, then we are able to login, so in this case, we 
    // must handle button click functionality.
    showMessageIndicator('login-btn', 'Login In Progress ...', 'SUBMIT_BUTTON', 'btn-disabled');
    const p = isCredsValid(username, password);
    p.then((data) => {
        if(data) {
            localStorage.setItem('userdata', JSON.stringify({username: username, isLoggedIn: true}));
            location.href = '/project';
        }
    })
    .catch(error => {
        showMessageIndicator('invalid-password', 'Something went wrong on server side.', 'SERVER_ERROR', 'error');
    });
}

function validateLogin(username, password) {
    if(username.trim().length < 1) {
        showMessageIndicator('invalid-username', '*** Username can\'t be empty ***', 'INPUT_FIELD', 'error');
        return false;
    }
    clearIndicatorMessages('invalid-username', 'error');
    if(password.trim().length < 1) {
        showMessageIndicator('invalid-password', '*** Password can\'t be empty ***', 'INPUT_FIELD', 'error');
        return false;
    }
    clearIndicatorMessages('invalid-password', 'error');
    return true;
}

function showMessageIndicator(idOfElement, message, type, classToAdd) {
    const element = document.getElementById(`${idOfElement}`);
    element.style.display = 'block';
    element.innerText = message;
    element.classList.add(`${classToAdd}`); // Add style for error in CSS file if you want.
    //debugger;
    switch (type) {
        case 'INPUT_FIELD':
            break;
        case 'SUBMIT_BUTTON':
            element.disabled = true;
            break; 
        // When something goes wrong in server side (like invalid credentials agains DB)    
        case 'SERVER_ERROR':
            element.innerText = message;
            element.enabled = true;
            break;      
        default:
            break;
    }
}

function clearIndicatorMessages(elementId, classToRemove, type = null) {
    const element = document.getElementById(`${elementId}`);
    element.classList.remove(`${classToRemove}`);
    element.innerText = '';    
    if(type === 'BUTTON') {
        element.innerText = 'Login';
        element.disabled = false;
    }
}

function isCredsValid(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isValid(username, password)) {
                resolve(true);
            }
            else {
                reject(false);
            }
            clearIndicatorMessages('login-btn', 'btn-disabled', 'BUTTON');
        }, 3000);
    });
}

function isValid(username, password) {
    return username === 'admin' && password === 'admin';
}