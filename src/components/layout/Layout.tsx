import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';

import backgroundImage from '../../assets/background.jpg';

export const Layout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      sx={{
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <Header />

      <Container component="main" sx={{ flexGrow: 1, py: 4, pt: 10 }}>
        {children || <Outlet />}
      </Container>

      <Footer />
    </Box>
  );
};
