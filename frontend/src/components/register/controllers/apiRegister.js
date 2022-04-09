const axios = require('axios');

function sendUserRegistration(user){
    const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
    console.log(api_endpoint);
    axios.post(`//${api_endpoint}/auth/register`, {
      
        email:"bruno02aasIASDJAOIDJdasouto@gmail.com",
        password:"teste123",
        dbo:"1999-30-12",
        phone:"21996084687"
      
      })
      .then(function (response) {
        console.log(response.status);
        return response.status
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = sendUserRegistration;