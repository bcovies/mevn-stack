const axios = require('axios');

module.exports = function(user){
    return new Promise(
        returnPromise =>{
            const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
            axios.post(`//${api_endpoint}/auth/login`, user)
            .then(function (response) {
                // handle success
                returnPromise({
                    "token": response.data.token,
                    "status": response.status
                });
            })
            .catch(function (error) {
                // handle error
                returnPromise({
                    "error": error.response.data.error,
                    "status": error.response.status
                });
            })
            .then(function () {
                // always executed
            });
        }
    );
}