const axios = require('axios');

module.exports = function(user){
  return new Promise(
    returnPromise => {
      const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
      axios.post(`//${api_endpoint}/auth/register`, user)
      .then(function (response) {
        console.log(response);
        returnPromise(response.status);
      })
      .catch(function (error) {
        console.log(error);
        returnPromise(error.response.data);
      });
    }
  );
}
