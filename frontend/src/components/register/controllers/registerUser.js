const axios = require('axios');

module.exports = function(user){
  return new Promise(
    returnPromise => {
      const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
      console.log(user)
      axios.post(`//${api_endpoint}/auth/register`, user)
      .then(function (response) {
        returnPromise({
          "status": response.status,
          "email": response.data.user.email,
          "token": response.data.token
        });
      })
      .catch(function (error) {
        returnPromise({
          "error": error.response.data.error,
          "status": error.response.status
        });
      });
    }
  );
}
