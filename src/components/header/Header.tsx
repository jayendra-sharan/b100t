import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import logo from './../../assets/logo.png';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box component="img" src={logo} sx={{ width: 60 }} />
      </Toolbar>
    </AppBar>
  );
};
