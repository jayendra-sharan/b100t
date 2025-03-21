import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2, // space between input and button
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          backgroundColor: '#ffffff',
          width: { xs: '100%', sm: '400px' },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        size="medium"
        sx={{
          textTransform: 'none',
          fontWeight: 'bold',
          width: { xs: '100%', sm: '200px' },
        }}
      >
        Join the waitlist
      </Button>
    </Box>
  );
};
