import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Divider } from '@mui/material';
import emailjs from '@emailjs/browser';

export const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const templateParams = {
      email,
    }
    emailjs
      .send('service_j1bfrlu', 'template_0jv6hyh', templateParams)
      .then((response) => {
        setIsRegistered(true);
        setSending(false);
      }, (error) => {
        console.log('Error sending email.');
        setError('Apolgies, someone was at the door! Could you try again?');
        setSending(false);
        setIsRegistered(false);
      })

  };

  if (sending) {
    return (
      <Box>
        <Typography
          component="p"
          gutterBottom
        >
          I'm glad that you are excited...
        </Typography>
        <Divider sx={{ backgroundColor: "#ffffff" }}/>
      </Box>
    )
  }

  if (isRegistered) {
    return (
      <Box>
        <Typography
          component="p"
          gutterBottom
        >
          See you soon!
        </Typography>
        <Divider sx={{ backgroundColor: "#ffffff" }}/>
      </Box>
    )
  }

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
      {
        !!error && (
          <Typography
            gutterBottom
            component="p"
            >
              {error}
          </Typography>
        )
      }
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
