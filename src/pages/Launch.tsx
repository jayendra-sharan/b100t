import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import logo from './../assets/logo.png';
import { Carousel } from './../components/carousel';
import { EmailSignup } from './../components/email-signup';

export default function LaunchPage() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box component="img" src={logo} sx={{ width: 80 }} />
      <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <Container
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            px: 0,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 900,
              fontSize: {
                sx: '4rem',
                sm: '4rem',
                md: '6rem',
              },
            }}
          >
            Beyond 100 Things
          </Typography>
          <Carousel />
          <EmailSignup />
        </Container>
      </Box>
    </Box>
  );
}
