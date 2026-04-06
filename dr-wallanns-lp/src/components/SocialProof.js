import React from 'react';
import { Box, Typography, Container, Card, CardContent, Rating, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const MotionCard = motion.create(Card);

const testimonials = [
  {
    name: 'Ana Carolina M.',
    text: 'Dr. Wallanns \u00E9 extremamente atencioso e paciente. Explicou tudo com detalhes sobre meu quadro de refluxo e me deu muita seguran\u00E7a. Melhor gastro que j\u00E1 consultei!',
    initials: 'AC',
  },
  {
    name: 'Roberto S.',
    text: 'Depois de anos sofrendo com problemas digestivos, finalmente encontrei um m\u00E9dico que investigou a fundo. Diagn\u00F3stico preciso e tratamento que realmente funcionou.',
    initials: 'RS',
  },
  {
    name: 'Maria Helena P.',
    text: 'Fiz minha endoscopia com o Dr. Wallanns e foi a melhor experi\u00EAncia. Al\u00E9m da compet\u00EAncia t\u00E9cnica, o acolhimento humano faz toda a diferen\u00E7a. Super recomendo!',
    initials: 'MH',
  },
  {
    name: 'Carlos Eduardo R.',
    text: 'M\u00E9dico resolutivo e muito dedicado. Tratou minha esteatose hep\u00E1tica com um plano completo. Meus exames melhoraram em poucos meses. Gratid\u00E3o!',
    initials: 'CE',
  },
];

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
              gap: 1,
              bgcolor: '#fff',
              borderRadius: 50,
              px: 3,
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
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
              {'M\u00E9dico 5 Estrelas no Google'}
            </Typography>
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
                      mb: 3,
                      fontSize: '0.9rem',
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 'auto' }}>
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: 'primary.main',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                      }}
                    >
                      {item.initials}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
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
      </Container>
    </Box>
  );
};

export default SocialProof;
