import React, { useState, useEffect } from 'react';
import { Fab, Zoom, Tooltip } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFab = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Zoom in={visible}>
      <Tooltip title="Fale conosco pelo WhatsApp" placement="left">
        <Fab
          component="a"
          href="https://wa.me/5531987808114?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: 60,
            height: 60,
            bgcolor: '#25D366',
            color: '#fff',
            boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
            '&:hover': {
              bgcolor: '#128C7E',
              boxShadow: '0 6px 28px rgba(37,211,102,0.5)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
            zIndex: 1000,
          }}
        >
          <FaWhatsapp size={28} />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default WhatsAppFab;
