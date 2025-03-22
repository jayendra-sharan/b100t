import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { LanguageSelector } from '../language-selector';
import { useFeatureFlags } from './../../contexts/FeatureFlagContext';

export const Header: React.FC = () => {
  const { enableLanguageSwitcher } = useFeatureFlags();

  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ top: 0 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          sx={{ flexGrow: 1, color: '#ffffff' }}
        >
          Beyond 100 Things
        </Typography>

        {enableLanguageSwitcher && <LanguageSelector />}
      </Toolbar>
    </AppBar>
  );
};
