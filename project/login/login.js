const onLogin = () => {
    const username = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    const p = isCredsValid(username, password);
    p.then((data) => {
        if(data) {
            // TODO: save to local storage
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