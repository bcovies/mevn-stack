function redirectToLogin(){
    console.log(`${window.location.hostname}`);
    window.location.replace(`${window.location.hostname}/login`);
}

module.exports = redirectToLogin;