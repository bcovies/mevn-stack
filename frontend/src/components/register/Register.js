import React from 'react';
import { Button, TextField, Box, Typography } from '@material-ui/core';
import registerUser from './controllers/registerUser';
import redirectToLogin from './controllers/reactRedirect';

class Register extends React.Component{  
  constructor(props){
    super(props);
    this.state = { 
      email: '',
      password: '',
      dob: '',
      phone: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeDob = this.handleChangeDob.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
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
  handleChangeDob(event) {    
    // console.log(event.target.value)
    this.setState({
      dob: event.target.value
    });  
  }
  handleChangePhone(event) {    
    // console.log(event.target.value)
    this.setState({
      phone: event.target.value
    });  
  }


  async handleSubmit(event) {
      event.preventDefault(); 
      const responseStatus = await registerUser(this.state);
      console.log(responseStatus);
      if( responseStatus.status == 200 ){
        console.log('User registred with success!'); 
        alert(responseStatus.token);
        redirectToLogin();
      } else if (responseStatus.status == 400) {
        console.log('Error!'); 
        alert(responseStatus.error);
      }
      else {
        console.log('Unkwon error!');
        alert("Please contact our support team");
      }
  }

  render(){
    return (
      <>
      <form onSubmit={(event) => this.handleSubmit(event)}>
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
                      Register
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
                    label="Password"
                    type="password"
                    // value={this.state.email} 
                    onChange={this.handleChangePassword}
                  />
                  <TextField
                    id="dob"
                    name="dob"
                    label="Day of birth"
                    type="date"
                    // value={this.state.email} 
                    onChange={this.handleChangeDob}
                  />
                  <TextField
                    id="phone"
                    name="phone"
                    label="Phone"
                    type="phone"
                    // value={this.state.email} 
                    onChange={this.handleChangePhone}
                  />
                                    
                  <Button 
                    variant="contained"
                    type='submit'
                    >
                      Register!
                  </Button>
            </Box>
          </Box>
      </form>
      </>
    );
  }
}

export default Register;