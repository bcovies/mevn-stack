import React from 'react';
import { Button, TextField, Box, Typography } from '@material-ui/core';

const Login = () => {

  return (
    <>
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
              />
              <TextField
                id="password"
                name="password"
                label="Senha"
                type="password"
              />
              <Button 
                variant="contained"
                >
                  Login!
              </Button>
          </Box>
        </Box>
    </>
  );
}

export default Login;