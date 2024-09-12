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
    const p = isCredsValid(username, password);
    p.then((data) => {
        if(data) {
            localStorage.setItem('userdata', JSON.stringify({username: username, isLoggedIn: true}));
            location.href = '/project';
        }
        else {
            // Display error message
        }
    });
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
        }, 3000);
    });
}

function isValid(username, password) {
    return username === 'admin' && password === 'admin';
}