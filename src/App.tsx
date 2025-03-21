import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import LaunchPage from './pages/Launch';
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LaunchPage />
    </ThemeProvider>
  );
}

export default App;
