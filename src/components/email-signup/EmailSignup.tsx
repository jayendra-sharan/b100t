import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Divider } from '@mui/material';
import emailjs from '@emailjs/browser';

import { useTranslation } from 'react-i18next';

export const EmailSignup: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const templateParams = {
      email,
    };
    emailjs.send('service_j1bfrlu', 'template_0jv6hyh', templateParams).then(
      (response) => {
        setIsRegistered(true);
        setSending(false);
      },
      (error) => {
        console.log('Error sending email.');
        setError(t('email_sign_up_error_message'));
        setSending(false);
        setIsRegistered(false);
      },
    );
  };

  if (sending) {
    return (
      <Box>
        <Typography component="p" gutterBottom>
          {t('email_sign_up_loading_text')}
        </Typography>
        <Divider sx={{ backgroundColor: '#ffffff' }} />
      </Box>
    );
  }

  if (isRegistered) {
    return (
      <Box>
        <Typography component="p" gutterBottom>
          {t('email_sign_up_success')}
        </Typography>
        <Divider sx={{ backgroundColor: '#ffffff' }} />
      </Box>
    );
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
      {!!error && (
        <Typography gutterBottom component="p">
          {error}
        </Typography>
      )}
      <TextField
        variant="outlined"
        type="email"
        placeholder={t('email_sign_up_input_placeholder')}
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
        size="large"
        sx={{
          textTransform: 'none',
          fontWeight: 'bold',
        }}
      >
        {t('email_sign_up_button')}
      </Button>
    </Box>
  );
};
