const axios = require('axios');
function checkUser(email,password){
    console.log('teste')
    axios.get(`//${process.env.REACT_APP_API_ENDPOINT}:${process.env.REACT_APP_API_ENDPOINT_PORT}/user`)
        .then(function (response) {
            // handle success
            console.log('1: '+response);
            console.log(`2: Email: ${email} Password: ${password}`);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

module.exports = checkUser;