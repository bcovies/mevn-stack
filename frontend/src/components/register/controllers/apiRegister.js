const axios = require('axios');

function sendUserRegistration(user){
  return new Promise( 
    returnPromise => {
      const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
      try{
        axios.post(`http://${api_endpoint}/auth/register`, user)
        .then(function (response) {
          console.log(response);
          returnPromise(response);
        })
        .catch(function (error) {
          console.log(error);
          returnPromise(error);
        });
      } catch (err){
        console.log(err)
      }
    }
  );
}

module.exports = sendUserRegistration;