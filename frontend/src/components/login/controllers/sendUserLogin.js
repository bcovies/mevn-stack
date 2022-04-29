const axios = require('axios');

module.exports = function(token){
    return new Promise (
        returnPromisse => {
            // console.log(token)
            const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
            axios.get(`//${api_endpoint}/auth/login`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                  }
            }).
            then(function(response){
                // console.log({
                //    "status": response.status,
                //    "data": response.data
                // });
                returnPromisse (response);

            }).catch (function(error){
                
                returnPromisse (error)
            });
    });
}
