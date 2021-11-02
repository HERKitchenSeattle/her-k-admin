import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { Google } from '@mui/icons-material';
import { auth } from './App';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const handleLogin = async (email: string) => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider).then(() => {});
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="span">
            Login
          </Typography>
          <div>
            <Button
              variant="outlined"
              startIcon={<Google />}
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email);
              }}
              className={'button block'}
            >
              <span>Sign In With Google</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Login;
