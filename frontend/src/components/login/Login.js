import React from 'react';
import { Button, TextField, Box, Typography } from '@material-ui/core';
import getUserToken from './controllers/getUserToken';
import sendUserLogin from './controllers/sendUserLogin';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(event) {    
    // console.log(event.target.value)
    this.setState({
      email: event.target.value
    });  
  }
  
  handleChangePassword(event) {    
    // console.log(event.target.value)
    this.setState({
      password: event.target.value
    });  
  }

  async handleSubmit(event) {
    try{
      event.preventDefault();
      const dataResponse = await getUserToken(this.state);
      if(dataResponse.status === 200){
        const userToken = dataResponse.token;
        console.log('User token: ' + userToken);
      event.preventDefault();
      const loginResponse = await sendUserLogin(dataResponse.token);
        console.log('Login response'+loginResponse);
      }


    }catch (e){
      console.log(e);
    }
  }

  render(){
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='center'
          >
            <Box 
              display='flex'
              flexDirection='column'
              justifyContent='center'
              >
                  <Typography 
                    variant="h3" component="h3"
                    >
                      Login
                  </Typography>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    // value={this.state.email} 
                    onChange={this.handleChangeEmail}
                  />
                  <TextField
                    id="password"
                    name="password"
                    label="Senha"
                    type="password"
                    // value={this.state.password} 
                    onChange={this.handleChangePassword}
                  />
                  <Button 
                    variant="contained"
                    type='submit'
                    >
                      Login!
                  </Button>
            </Box>
          </Box>
      </form>
      </>
    );
  }
}

export default Login;