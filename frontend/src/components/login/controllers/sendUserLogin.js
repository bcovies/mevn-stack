const axios = require('axios');

module.exports = function(token){
    return new Promise (
        returnPromisse => {
            console.log(token)
            const transformToken = ""
            axios.get('//127.0.0.1:8080/auth/login',{
                headers: {
                    "x-dsi-restful":1,
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  }
            }).
            then(function(response){
                console.log({
                   "status": response.status,
                   "data": response.data
                });
                returnPromisse (response);

            }).catch (function(error){
                
                returnPromisse (error)
            });
    });
}
