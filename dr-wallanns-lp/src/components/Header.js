import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Container, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Sobre', href: '#autoridade' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const MotionButton = motion.create(Button);

const pulseAnimation = {
  scale: [1, 1.05, 1],
  boxShadow: [
    '0 4px 14px rgba(196,154,92,0.3)',
    '0 4px 20px rgba(196,154,92,0.6)',
    '0 4px 14px rgba(196,154,92,0.3)'
  ],
  transition: {
    duration: 2.2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled ? 'rgba(16,46,74,0.96)' : 'rgba(16,46,74,0.86)',
          backdropFilter: 'blur(10px)',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box
              component="a"
              href="#"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <img
                src={logo}
                alt="Dr. Wallanns Resende"
                style={{
                  height: 80,
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: '#D1A661',
                      background: 'rgba(209,166,97,0.14)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <MotionButton
                variant="contained"
                href="https://wa.me/5531987808114?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener"
                size="small"
                animate={pulseAnimation}
                sx={{
                  ml: 1,
                  py: 1.2,
                  px: 3,
                  background: '#C49A5C !important',
                  color: '#FFFFFF !important',
                  fontWeight: 800,
                  borderRadius: '8px',
                  boxShadow: '0 4px 14px rgba(196,154,92,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: '#B38950 !important',
                    color: '#FFFFFF !important',
                    boxShadow: '0 6px 20px rgba(196,154,92,0.4)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Agendar Consulta
              </MotionButton>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: '#F4E5BF',
              }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: 280, background: '#0A2540', color: '#fff' },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              component="a"
              href={item.href}
              onClick={() => setMobileOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 1,
                '&:hover': { background: 'rgba(255,255,255,0.1)' },
              }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 500 }} />
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2 }}>
            <MotionButton
              variant="contained"
              fullWidth
              href="https://wa.me/5531987808114?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener"
              animate={pulseAnimation}
              sx={{
                background: '#C49A5C !important',
                color: '#FFFFFF !important',
                fontWeight: 800,
                py: 1.5,
                borderRadius: '8px',
                '&:hover': {
                  background: '#B38950 !important',
                  color: '#FFFFFF !important',
                },
              }}
            >
              Agendar Consulta
            </MotionButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
