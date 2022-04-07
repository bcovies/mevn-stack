import React from 'react';
import { Button, TextField, Box } from '@material-ui/core';

const Login = () => {

  return (
    <>
      <h2>Página de Login</h2>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='center'
        >
          <Box 
            display='inline-flex'
            flexDirection='column'
            >
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