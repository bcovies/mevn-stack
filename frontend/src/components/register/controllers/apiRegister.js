const axios = require('axios');

function sendUserRegistration(user){
  return new Promise( 
    returnPromise => {
      const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
      axios.post(`//${api_endpoint}/auth/register`, user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }
  );
}

module.exports = sendUserRegistration;