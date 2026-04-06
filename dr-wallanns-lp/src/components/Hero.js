import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import principal from '../assets/principal.webp';

const MotionBox = motion.create(Box);

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: { xs: 'flex-end', md: 'center' },
        overflow: 'hidden',
        backgroundColor: '#F9FBFD',
        minHeight: { xs: '90vh', sm: '100vh', md: '100vh' },
      }}
    >
      {/* FOTO DE FUNDO (MOBILE) E LATERAL (DESKTOP) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          '&::after': { // Overlay de degradê
            content: '""',
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(to top, rgba(249,251,253,1) 0%, rgba(249,251,253,0.8) 30%, transparent 60%)',
              md: 'linear-gradient(to right, rgba(249,251,253,1) 0%, rgba(249,251,253,0.98) 45%, rgba(249,251,253,0.6) 58%, transparent 70%)',
            },
          },
        }}
      >
        <Box
          component="img"
          src={principal}
          alt="Dr. Wallanns Resende"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: { xs: 'top center', md: 'calc(50% + 150px) top' },
            transform: { md: 'scale(1.3)' },
          }}
        />
      </Box>

      {/* CONTEÚDO */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          py: { xs: 4, md: 2 },
          px: { xs: 3, sm: 4, md: 2 },
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            width: { xs: '100%', md: '57%' },
            maxWidth: { xs: '100%', md: 720, lg: 780 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            ml: { md: -2, lg: -3 },
            pr: { md: 4, lg: 6 },
          }}
        >
          {/* HEADLINE */}
          <Typography
            variant="h1"
            sx={{
              color: '#0F2B46',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.6rem', lg: '2.8rem' },
              lineHeight: { xs: 1.25, md: 1.3 },
              fontWeight: 800,
              mb: 2.5,
            }}
          >
            <Box component="span" sx={{ display: 'block', whiteSpace: { xs: 'normal', md: 'nowrap' } }}>
              Sua saúde digestiva <Box component="span" sx={{ color: '#C49A5C' }}>merece</Box>
            </Box>
            <Box component="span" sx={{ display: 'block', whiteSpace: { xs: 'normal', md: 'nowrap' } }}>
              uma <Box component="span" sx={{ color: '#C49A5C' }}>investigação profunda</Box>
            </Box>
            <Box component="span" sx={{ display: 'block', whiteSpace: { xs: 'normal', md: 'nowrap' } }}>
              e um <Box component="span" sx={{ color: '#C49A5C' }}>cuidado individualizado</Box>.
            </Box>
          </Typography>

          {/* TEXTO */}
          <Typography
            component="p"
            sx={{
              color: '#2A435D',
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.65,
              mb: 3.5,
              maxWidth: { xs: 520, md: 580 },
              textAlign: { xs: 'center', md: 'justify' },
            }}
          >
            Deixe para trás o desconforto constante do refluxo, da dor abdominal e as incertezas da gordura no fígado. Com um olhar atento e raciocínio clínico minucioso, o Dr. Wallanns Resende ajuda você a descobrir as causas reais dos seus sintomas para recuperar sua qualidade de vida.
          </Typography>

          {/* CTA */}
          <Button
            variant="contained"
            size="large"
            href="https://wa.me/5531987808114?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener"
            sx={{
              bgcolor: '#1E63D8',
              color: '#FFFFFF',
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              py: 1.8,
              px: { xs: 3, sm: 4 },
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(30,99,216,0.35)',
              width: { xs: '100%', sm: 'auto' },
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#C49A5C',
                color: '#0F2B46',
                boxShadow: '0 14px 34px rgba(196,154,92,0.55)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            🔵 QUERO RECUPERAR MINHA SAÚDE DIGESTIVA
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Hero;