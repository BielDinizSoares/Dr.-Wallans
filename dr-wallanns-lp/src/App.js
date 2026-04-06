import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import HowWeHelp from './components/HowWeHelp';
import Authority from './components/Authority';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A2540',
      light: '#1B5E7B',
      dark: '#061A2E',
    },
    secondary: {
      main: '#1B5E7B',
      light: '#2A8BAF',
    },
    success: {
      main: '#25D366',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8FAFB',
    },
    text: {
      primary: '#1a1a2e',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '12px 32px',
          fontSize: '1rem',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0A2540 0%, #1B5E7B 100%)',
          boxShadow: '0 4px 20px rgba(10, 37, 64, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1B5E7B 0%, #2A8BAF 100%)',
            boxShadow: '0 6px 30px rgba(10, 37, 64, 0.4)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <HowWeHelp />
        <Authority />
        <SocialProof />
      </main>
      <Footer />
      <WhatsAppFab />
    </ThemeProvider>
  );
}

export default App;
