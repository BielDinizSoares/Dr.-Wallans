import React from 'react';
import { Box, Typography, Container, Card, CardContent, Rating, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import nathaliaPhoto from '../assets/testimonial-nathalia.png';
import andrePhoto from '../assets/testimonial-andre.png';
import agdaPhoto from '../assets/testimonial-agda.png';
import adrianePhoto from '../assets/testimonial-adriene.png';

const MotionCard = motion.create(Card);

const testimonials = [
  {
    name: 'Nathalia Macedo Marteletto',
    text: 'Atencioso, preocupa de verdade com sua saúde e tem uma formação muito respeitada, dentro dos maiores hospitais de Belo Horizonte. Recomendo de olhos fechados!',
    photo: nathaliaPhoto,
    initials: 'NM',
  },
  {
    name: 'André Vaz',
    text: 'Muito humano! Cuidou muito bem do meu pai. Indico de olhos fechados',
    photo: andrePhoto,
    initials: 'AV',
  },
  {
    name: 'Agda Ferreira',
    text: 'Excelente profissional, muito dedicado e atencioso. Excelência no atendimento ao paciente.',
    photo: agdaPhoto,
    initials: 'AF',
  },
  {
    name: 'Adriane Sa',
    text: 'Excelente médico. Muito atencioso, trata seus pacientes com muito carinho e respeito.',
    photo: adrianePhoto,
    initials: 'AS',
  },
];

// Google G Logo SVG Component
const GoogleGLogo = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
);

const SocialProof = () => {
  return (
    <Box
      id="depoimentos"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #F8FAFB 0%, #EDF2F7 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          {/* Google badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              bgcolor: '#fff',
              borderRadius: 50,
              px: { xs: 2.5, md: 3 },
              py: 1.2,
              mb: 3,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <Box sx={{ display: 'flex', gap: 0.3 }}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} sx={{ fontSize: 20, color: '#FBBC04' }} />
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <GoogleGLogo />
            </Box>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: 'primary.main',
              mb: 2,
            }}
          >
            O que dizem os pacientes
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 650,
              mx: 'auto',
              mb: 6,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              lineHeight: 1.8,
            }}
          >
            {'A confian\u00E7a se constr\u00F3i com resultados e atendimento humano. Veja a opini\u00E3o de quem j\u00E1 passou pela investiga\u00E7\u00E3o minuciosa do Dr. Wallanns.'}
          </Typography>
        </motion.div>

        {/* Desktop View */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid container spacing={3}>
            {testimonials.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                <MotionCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  elevation={0}
                  sx={{
                    height: '100%',
                    bgcolor: '#fff',
                    borderRadius: 3,
                    border: '1px solid rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(10,37,64,0.08)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <FormatQuoteIcon sx={{ fontSize: 32, color: 'rgba(27,94,123,0.2)', mb: 1, transform: 'scaleX(-1)' }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        flex: 1,
                        mb: 2,
                        fontSize: '0.9rem',
                      }}
                    >
                      {item.text}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 'auto', minHeight: 45 }}>
                      <Avatar
                        src={item.photo}
                        sx={{
                          width: { xs: 45, md: 40 },
                          height: { xs: 45, md: 40 },
                          bgcolor: 'primary.main',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          flexShrink: 0,
                          background: '#f0f0f0',
                        }}
                      >
                        {item.initials}
                      </Avatar>
                      <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            fontWeight: 600, 
                            lineHeight: 1.2,
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Rating value={5} readOnly size="small" sx={{ mt: 0.3 }} />
                      </Box>
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mobile View with Swiper Carousel */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, pb: 4, width: '100%', overflow: 'hidden' }}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            style={{ paddingBottom: '50px', paddingTop: '10px' }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} style={{ height: 'auto', alignSelf: 'stretch' }}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    bgcolor: '#fff',
                    borderRadius: 3,
                    border: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, sm: 3 }, display: 'flex', flexDirection: 'column', height: '100%', flexGrow: 1 }}>
                    <FormatQuoteIcon sx={{ fontSize: 32, color: 'rgba(27,94,123,0.2)', mb: 1, transform: 'scaleX(-1)' }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        flex: 1,
                        mb: 2,
                        fontSize: '0.9rem',
                      }}
                    >
                      {item.text}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 'auto', minHeight: 45 }}>
                      <Avatar
                        src={item.photo}
                        sx={{
                          width: { xs: 45, md: 40 },
                          height: { xs: 45, md: 40 },
                          bgcolor: 'primary.main',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          flexShrink: 0,
                          background: '#f0f0f0',
                        }}
                      >
                        {item.initials}
                      </Avatar>
                      <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            fontWeight: 600, 
                            lineHeight: 1.2,
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Rating value={5} readOnly size="small" sx={{ mt: 0.3 }} />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Google Reviews Button */}
        <Box sx={{ textAlign: 'center', mt: { xs: 2, md: 6 } }}>
          <Button
            variant="outlined"
            size="large"
            href="https://www.google.com.br/search?sca_esv=a56531b4984f7007&kgmid=%2Fg%2F11z4g6mfxp&q=Dr.%20Wallanns%20Santos%20Gastro&shem=ptotple&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm4%2F3#lrd=0xa43ddcfd291e69:0x7c912795e7d51a10,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <GoogleGLogo />
              </Box>
            }
            sx={{
              borderRadius: 50,
              textTransform: 'none',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderColor: 'rgba(0,0,0,0.1)',
              color: 'text.primary',
              '&:hover': {
                borderColor: 'rgba(0,0,0,0.2)',
                background: 'rgba(0,0,0,0.02)',
              },
            }}
          >
            Ver mais avaliações no Google
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SocialProof;
