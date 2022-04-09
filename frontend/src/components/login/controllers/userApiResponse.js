const axios = require('axios');

function checkResponseStatus(){
    return new Promise(
        returnPromise =>{
            const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
            axios.get(`//${api_endpoint}/user`)
            .then(function (response) {
                // handle success
                console.log(`Server Backend Response: ${response.status}`);
                returnPromise(response.status);
            })
            .catch(function (error) {
                // handle error
                console.log(`Server backend error: ${error}`);
            })
            .then(function () {
                // always executed
            });
        }
    );
}

module.exports = checkResponseStatus;