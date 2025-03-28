import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import theme from './theme';
import LaunchPage from './pages/Launch';
import emailjs from '@emailjs/browser';
import { Header } from './components/header';
import { Layout } from './components/layout';
import { Faq } from './pages/faq';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LaunchPage />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
