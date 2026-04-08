import React from 'react';
import { Box, Typography, Container, Button, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaWhatsapp } from 'react-icons/fa';

const MotionBox = motion.create(Box);

const Footer = () => {
  return (
    <Box
      component="footer"
      id="contato"
      sx={{
        background: 'linear-gradient(135deg, #0A2540 0%, #0D3251 50%, #0A2540 100%)',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.6rem', md: '2.2rem' },
                color: '#fff',
                mb: 2,
              }}
            >
              {'Pronto para iniciar seu cuidado?'}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                mb: 4,
                fontSize: '1.05rem',
              }}
            >
              {'Agende sua consulta hoje mesmo.'}
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<FaWhatsapp size={22} />}
              href="https://wa.me/5531987808114?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener"
              sx={{
                bgcolor: '#25D366',
                color: '#fff',
                py: 1.8,
                px: 5,
                fontSize: '1.05rem',
                boxShadow: '0 6px 24px rgba(37,211,102,0.35)',
                '&:hover': {
                  bgcolor: '#128C7E',
                  boxShadow: '0 8px 32px rgba(37,211,102,0.45)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {'Agendar Consulta pelo WhatsApp'}
            </Button>
          </MotionBox>
        </Container>
      </Box>

      {/* Footer Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 6 } }}>
        <Grid container spacing={4}>
          {/* Logo & Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 2 }}>
              <img
                src={logo}
                alt="Dr. Wallanns Resende"
                style={{ height: 50, filter: 'brightness(0) invert(1)' }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, mb: 2 }}>
              {'Gastroenterologista e Endoscopista em Belo Horizonte. Cuidado humano com precis\u00E3o t\u00E9cnica.'}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href="https://www.instagram.com/dr.wallanns.santos.gastro/"
                target="_blank"
                rel="noopener"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  '&:hover': { color: '#E1306C', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/5531987808114"
                target="_blank"
                rel="noopener"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  '&:hover': { color: '#25D366', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                <FaWhatsapp size={22} />
              </IconButton>
            </Box>
          </Grid>

          {/* Locations */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#fff' }}>
              {'Locais de Atendimento'}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 20, color: '#2A8BAF', mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>
                    {'Hospital Evang\u00E9lico de BH'}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                    {'Servi\u00E7o de Endoscopia'}
                  </Typography>
                </Box>
              </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <LocationOnIcon sx={{ fontSize: 20, color: '#2A8BAF', mt: 0.3 }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>
                      {'Cl\u00EDnicas Nefes e Almane'}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      {'Consult\u00F3rios'}
                    </Typography>
                  </Box>
                </Box>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#fff' }}>
              Contato
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box
                component="a"
                href="tel:+5531987808114"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#fff' },
                }}
              >
                <PhoneIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2">(31) 98780-8114</Typography>
              </Box>
              <Box
                component="a"
                href="mailto:wallannsresende@yahoo.com.br"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#fff' },
                }}
              >
                <EmailIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2">wallannsresende@yahoo.com.br</Typography>
              </Box>
              <Box
                component="a"
                href="https://www.instagram.com/dr.wallanns.santos.gastro/"
                target="_blank"
                rel="noopener"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#fff' },
                }}
              >
                <InstagramIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2">@dr.wallanns.santos.gastro</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Google Maps */}
        <Box
          sx={{
            mt: 5,
            borderRadius: 3,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Cl%C3%ADnica+NEFES+SA%C3%9ADE&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Cl\u00EDnica NEFES SA\u00DADE"
          />
        </Box>

        {/* Copyright */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            {'\u00A9 2026 Dr. Wallanns Resende. Todos os direitos reservados.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
