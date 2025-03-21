import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './theme';
import { Header } from './components/header';
import LaunchPage from './pages/Launch';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LaunchPage />
    </ThemeProvider>
  );
}

export default App;
