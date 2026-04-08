import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import autoridade from '../assets/autoridade.webp';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const MotionBox = motion.create(Box);

const highlights = [
  {
    icon: <SecurityIcon sx={{ fontSize: 28, color: '#1B5E7B' }} />,
    title: 'Disciplina no Cuidado',
    text: 'Tenente M\u00E9dico da Pol\u00EDcia Militar de MG.',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 28, color: '#1B5E7B' }} />,
    title: 'Formando Novos M\u00E9dicos',
    text: 'Professor na Faminas-BH e Preceptor no HPM-MG.',
  },
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 28, color: '#1B5E7B' }} />,
    title: 'Experi\u00EAncia nos Maiores Centros',
    text: 'Atua no Hospital Evang\u00E9lico de BH e Cl\u00EDnicas Almane, Nefes e HPM.',
  },
  {
    icon: <AutoStoriesIcon sx={{ fontSize: 28, color: '#1B5E7B' }} />,
    title: 'Especializa\u00E7\u00E3o de Elite',
    text: 'Resid\u00EAncias em Cl\u00EDnica M\u00E9dica, Gastroenterologia e Endoscopia.',
  },
];

const Authority = () => {
  return (
    <Box
      id="autoridade"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Image Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              sx={{ position: 'relative' }}
            >
              {/* Decorative element behind image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1B5E7B 0%, #2A8BAF 100%)',
                  borderRadius: 4,
                  opacity: 0.15,
                }}
              />
              <Box
                component="img"
                src={autoridade}
                alt="Dr. Wallanns Resende"
                sx={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: '0 20px 60px rgba(10,37,64,0.2)',
                }}
              />
            </MotionBox>
          </Grid>

          {/* Content Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              {/* <Chip
                label="O Especialista"
                sx={{
                  mb: 2,
                  bgcolor: 'rgba(27,94,123,0.08)',
                  color: '#1B5E7B',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                }}
              /> */}
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.3rem' },
                  color: 'primary.main',
                  mb: 3,
                  lineHeight: 1.3,
                }}
              >
                {'Mais do que um diagn\u00F3stico, um compromisso com a sua vida.'}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                {'Acredito que a medicina \u00E9 uma miss\u00E3o de servi\u00E7o. Sua trajet\u00F3ria foi constru\u00EDda com um \u00FAnico objetivo: unir a alta precis\u00E3o t\u00E9cnica de um especialista ao acolhimento que todo ser humano precisa quando busca sa\u00FAde.'}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {highlights.map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(27,94,123,0.04)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, rgba(27,94,123,0.1) 0%, rgba(42,139,175,0.1) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, color: 'primary.main', mb: 0.3 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
                        {item.text}
                      </Typography>
                    </Box>
                  </MotionBox>
                ))}
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Authority;
