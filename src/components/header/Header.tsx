import React from 'react';
import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import { LanguageSelector } from '../language-selector';
import { useFeatureFlags } from './../../contexts/FeatureFlagContext';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import logo from './../../assets/logo.png';

export const Header: React.FC = () => {
  const { enableLanguageSwitcher } = useFeatureFlags();

  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ top: 0, paddingBlockStart: '20px' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left: Logo and Brand */}
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box
            component="img"
            src={logo}
            sx={{ width: 30, marginRight: '10px' }}
          />
          <Typography
            variant="h6"
            color="inherit"
            sx={{ color: '#ffffff', fontWeight: 700 }}
          >
            Beyond 100 things
          </Typography>
        </Link>

        {/* Right: Navigation links and language selector */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontWeight: 500,
              color: '#ffffff',
            }}
          >
            <HomeIcon fontSize="small" />
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/faq"
            underline="none"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontWeight: 500,
              color: '#ffffff',
            }}
          >
            <HelpOutlineIcon fontSize="small" />
            FAQ
          </Link>
          {enableLanguageSwitcher && <LanguageSelector />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
