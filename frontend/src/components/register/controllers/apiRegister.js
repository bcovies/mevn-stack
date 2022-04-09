const axios = require('axios');

function sendUserRegistration(user){
  return new Promise( 
    returnPromise => {
      const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
      console.log("1")
      console.log(api_endpoint)
      console.log(user)
      try{
        console.log('1.1')
        axios.post(`http://${api_endpoint}/auth/register`,{
          "email":"1233213@gmail.com",
          "password":"test123",
          "dbo":"1999-30-12",
          "phone":"123456789"
        })
        .then(function (response) {
          console.log("2")
          console.log(response);
          returnPromise(response);
        })
        .catch(function (error) {
          console.log("3")
          console.log(error);
          returnPromise(error);
        }).then(function(){
          console.log("4")
        });
        console.log('1.2')
      } catch (err){
        console.log('1.3')
        console.log(err)
      }
    }
  )
}

module.exports = sendUserRegistration;