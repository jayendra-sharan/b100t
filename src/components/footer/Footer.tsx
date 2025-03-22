import React from 'react';
import { Box, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        py: 2,
        textAlign: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ color: '#ffffff' }}
      >
        © {new Date().getFullYear()} beyond100things.com
      </Typography>
    </Box>
  );
};
