import React from 'react';
import { Box, Typography, Button, Container, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import HealingIcon from '@mui/icons-material/Healing';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BiotechIcon from '@mui/icons-material/Biotech';
import ShieldIcon from '@mui/icons-material/Shield';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MotionCard = motion.create(Card);

const services = [
  {
    icon: <LocalFireDepartmentIcon sx={{ fontSize: 36, color: '#1B5E7B' }} />,
    symptom: 'Azia, queima\u00E7\u00E3o e dor no est\u00F4mago',
    technical: 'Refluxo Gastroesof\u00E1gico e Gastrite',
  },
  {
    icon: <MonitorHeartIcon sx={{ fontSize: 36, color: '#1B5E7B' }} />,
    symptom: 'Cuidado com a gordura no f\u00EDgado',
    technical: 'Esteatose Hep\u00E1tica e Cirrose',
  },
  {
    icon: <BubbleChartIcon sx={{ fontSize: 36, color: '#1B5E7B' }} />,
    symptom: 'Estufamento, gases e altera\u00E7\u00E3o no ritmo intestinal',
    technical: 'S\u00EDndrome do Intestino Irritado',
  },
  {
    icon: <HealingIcon sx={{ fontSize: 36, color: '#1B5E7B' }} />,
    symptom: 'Diarreia cr\u00F4nica e dores abdominais fortes',
    technical: 'Doen\u00E7as Inflamat\u00F3rias Intestinais',
  },
  {
    icon: <FitnessCenterIcon sx={{ fontSize: 36, color: '#1B5E7B' }} />,
    symptom: 'Perda de peso com sa\u00FAde e equil\u00EDbrio',
    technical: 'Emagrecimento Saud\u00E1vel e Controle Metab\u00F3lico',
  },
  {
    icon: <BiotechIcon sx={{ fontSize: 36, color: '#1B5E7B' }} />,
    symptom: 'Exames de rotina para proteger o seu futuro',
    technical: 'Preven\u00E7\u00E3o / Endoscopia e Colonoscopia',
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 36, color: '#1B5E7B' }} />,
    symptom: 'Descobrir problemas antes que tragam sintomas',
    technical: 'Sa\u00FAde Preventiva e Check-up',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 36, color: '#1B5E7B' }} />,
    symptom: 'Acompanhamento de doen\u00E7as cr\u00F4nicas',
    technical: 'Diabetes, Press\u00E3o Alta e Obesidade',
  },
];

const HowWeHelp = () => {
  return (
    <Box
      id="especialidades"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #F8FAFB 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: 'primary.main',
              mb: 2,
            }}
          >
            Como o Dr. Wallanns pode ajudar voc{'\u00EA'}?
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              mb: 6,
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.8,
            }}
          >
            Cuidar da sa{'\u00FA'}de n{'\u00E3'}o precisa ser complicado. O Dr. Wallanns atua de forma pr{'\u00F3'}xima
            para tratar desde desconfortos di{'\u00E1'}rios at{'\u00E9'} condi{'\u00E7\u00F5'}es que exigem uma
            investiga{'\u00E7\u00E3'}o mais detalhada.
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(10,37,64,0.12)' }}
                elevation={0}
                sx={{
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'rgba(27,94,123,0.1)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  '&:hover': {
                    borderColor: 'rgba(27,94,123,0.3)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(27,94,123,0.08) 0%, rgba(42,139,175,0.08) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'text.primary',
                      mb: 1,
                      lineHeight: 1.4,
                    }}
                  >
                    {service.symptom}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#1B5E7B',
                      fontWeight: 500,
                      fontSize: '0.85rem',
                    }}
                  >
                    {service.technical}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box textAlign="center" sx={{ mt: 6 }}>
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
              {'Quero Cuidar da Minha Sa\u00FAde Agora'}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HowWeHelp;
