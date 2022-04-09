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
        axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `//${api_endpoint}login/login`,
            params: {
              "email":"bruno02aasAjdhadsa1231231SDAdasdsDSAdasouto@gmail.com",
              "password":"teste123",
              "dbo":"1999-30-12",
              "phone":"21996084687"
            }
        })
        .then((response) => response.data)
        .catch((error) => error);

        console.log('1.2')
        // axios.post(`http://${api_endpoint}/auth/register`, {
          
        //   "email":"bruno02aasAjdhadsa1231231SDAdasdsDSAdasouto@gmail.com",
        //   "password":"teste123",
        //   "dbo":"1999-30-12",
        //   "phone":"21996084687"
            
        // }, {
        //   "Content-Type":"application/json"
        // })
        // .then(function (response) {
        //   console.log("2")
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log("3")
        //   console.log(error);
        // }).then(function(){
        //   console.log("4")
        // });
      } catch (err){
        console.log(err)
      }
    }
  );
}

module.exports = sendUserRegistration;