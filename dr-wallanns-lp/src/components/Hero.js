import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import heroDesktop from '../assets/hero-desktop.png';
import heroMobile from '../assets/hero-mobile.png';
import heroLogo from '../assets/hero-logo.png';

const MotionBox = motion.create(Box);
const MotionButton = motion.create(Button);

const pulseAnimation = {
  scale: [1, 1.03, 1],
  boxShadow: [
    '0 8px 24px rgba(30,99,216,0.45)',
    '0 8px 32px rgba(30,99,216,0.65)',
    '0 8px 24px rgba(30,99,216,0.45)'
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

/* ─── Headline ─────────────────────────────────────────────────────────────── */
const Headline = ({ color = '#0F2B46', fontSize, centerOnMobile = false }) => (
  <Typography
    variant="h1"
    sx={{
      color,
      fontSize,
      lineHeight: 1.28,
      fontWeight: 800,
      mb: 0,
      textAlign: centerOnMobile ? { xs: 'left', sm: 'left' } : 'left',
      width: centerOnMobile ? { xs: 'fit-content', sm: 'auto' } : 'auto',
      mx: centerOnMobile ? { xs: 'auto', sm: '0' } : '0',
    }}
  >
    <Box component="span" sx={{ display: 'block', whiteSpace: 'nowrap' }}>
      Sua saúde digestiva{' '}
      <Box component="span" sx={{ color: '#C49A5C' }}>merece</Box>
    </Box>
    <Box component="span" sx={{ display: 'block', whiteSpace: 'nowrap' }}>
      uma{' '}
      <Box component="span" sx={{ color: '#C49A5C' }}>investigação profunda</Box>
    </Box>
    <Box component="span" sx={{ display: 'block', whiteSpace: 'nowrap' }}>
      e um{' '}
      <Box component="span" sx={{ color: '#C49A5C' }}>cuidado individualizado</Box>.
    </Box>
  </Typography>
);

/* ─── Subheadline ──────────────────────────────────────────────────────────── */
const Subheadline = ({ color = '#2A435D', fontSize = '1rem', justify = false }) => (
  <Typography
    component="p"
    sx={{
      color,
      fontFamily: "'Inter', sans-serif",
      fontSize,
      lineHeight: 1.65,
      textAlign: justify ? 'justify' : 'left',
    }}
  >
    Deixe para trás o desconforto constante do refluxo, da dor abdominal e as
    incertezas da gordura no fígado. Com um olhar atento e raciocínio clínico
    minucioso, o Dr. Wallanns Resende ajuda você a descobrir as causas reais dos
    seus sintomas para recuperar sua qualidade de vida.
  </Typography>
);

/* ─── CTA Button ───────────────────────────────────────────────────────────── */
const CtaButton = ({ fullWidth = false, fontSize = '1rem' }) => (
  <MotionButton
    variant="contained"
    size="large"
    href="https://wa.me/5531987808114?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
    target="_blank"
    rel="noopener"
    animate={pulseAnimation}
    sx={{
      bgcolor: '#1E63D8',
      color: '#FFFFFF',
      fontWeight: 700,
      textTransform: 'uppercase',
      borderRadius: '10px',
      px: fullWidth ? 2 : 4,
      py: 1.8,
      width: fullWidth ? '100%' : 'fit-content',
      mx: { xs: 'auto', lg: '0' },
      fontSize,
      boxShadow: '0 8px 24px rgba(30,99,216,0.45)',
      transition: 'background-color 0.25s ease, transform 0.25s ease',
      lineHeight: 1.2,
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      '&:hover': {
        bgcolor: '#C49A5C',
        color: '#0F2B46',
        boxShadow: '0 14px 34px rgba(196,154,92,0.55)',
        transform: 'translateY(-2px)',
      },
    }}
  >
    <FaWhatsapp size={28} style={{ color: '#FFFFFF', flexShrink: 0 }} />
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
      <Box component="span" sx={{ fontSize: '0.9em', opacity: 0.9, whiteSpace: 'nowrap' }}>QUERO RECUPERAR</Box>
      <Box component="span" sx={{ fontSize: '1.1em', fontWeight: 800, whiteSpace: 'nowrap' }}>MINHA SAÚDE DIGESTIVA</Box>
    </Box>
  </MotionButton>
);

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
const Hero = () => (
  <Box id="hero">

    {/* ══════════  DESKTOP  (lg = 1200px+)  ════════════════════════════════
        Imagem cobre 100vh com cover. Header sticky ocupa espaço acima.
    ═══════════════════════════════════════════════════════════════════════ */}
    <Box
      sx={{
        display: { xs: 'none', lg: 'flex' },
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${heroDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.88) 30%, rgba(255,255,255,0.25) 52%, transparent 68%)',
        }}
      />
      <MotionBox
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        sx={{ position: 'relative', zIndex: 2, ml: { md: '4%', lg: '5%', xl: '6%' }, maxWidth: { md: '42%', lg: '40%', xl: '38%' }, mt: { lg: -14, xl: -16 } }}
      >
        <Box
          component="img"
          src={heroLogo}
          alt="Dr. Wallanns - Gastroenterologia"
          sx={{
            width: { lg: '450px', xl: '520px' },
            maxWidth: '100%',
            height: 'auto',
            mb: 4,
            display: 'block',
          }}
        />
        <Headline fontSize={{ md: '2.1rem', lg: '2.5rem', xl: '2.75rem' }} />
        <Box sx={{ mt: 3, mb: 4 }}>
          <Subheadline fontSize={{ md: '0.95rem', lg: '1rem', xl: '1.05rem' }} justify />
        </Box>
        <CtaButton fontSize={{ md: '0.88rem', lg: '0.93rem', xl: '1rem' }} />
      </MotionBox>
    </Box>

    {/* ══════════  TABLET  (sm–md = 600–1199px, todos os iPads)  ═══════════
        Imagem em proporção natural (width 100%, height auto) — sem corte.
        Texto em overlay absoluto sobre a área branca à esquerda.
    ═══════════════════════════════════════════════════════════════════════ */}
    <Box
      sx={{
        display: { xs: 'none', sm: 'block', lg: 'none' },
        position: 'relative',
      }}
    >
      {/* Imagem completa, proporcional */}
      <Box
        component="img"
        src={heroDesktop}
        alt="Dr. Wallanns Resende"
        sx={{ width: '100%', height: 'auto', display: 'block' }}
      />

      {/* Overlay + texto posicionado sobre a área branca da foto */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 35%, rgba(255,255,255,0.15) 55%, transparent 70%)',
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          sx={{ ml: '4%', maxWidth: { sm: '48%', md: '44%' } }}
        >
          <Box
            component="img"
            src={heroLogo}
            alt="Dr. Wallanns - Gastroenterologia"
            sx={{
              width: { sm: '200px', md: '240px' },
              height: 'auto',
              mb: 2,
              display: 'block',
            }}
          />
          <Headline fontSize={{ sm: '1.35rem', md: '1.7rem' }} />
          <Box sx={{ mt: { sm: 1.5, md: 2 }, mb: { sm: 2, md: 3 } }}>
            <Subheadline fontSize={{ sm: '0.82rem', md: '0.9rem' }} justify />
          </Box>
          <CtaButton fontSize={{ sm: '0.75rem', md: '0.82rem' }} />
        </MotionBox>
      </Box>
    </Box>

    {/* ══════════  MOBILE  (xs < 600px, apenas celulares)  ══════════════════
        Foto portrait ocupa viewport menos header.
        Texto sobrepõe o fade branco inferior via mt negativo proporcional.
    ═══════════════════════════════════════════════════════════════════════ */}
    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>

      <Box
        sx={{
          height: 'calc(100svh - 116px)',
          backgroundImage: `url(${heroMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <MotionBox
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        sx={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0px, #FFFFFF 60px)',
          px: 3,
          pt: '46px',
          pb: 6,
          mt: 'calc((100svh - 116px) * -0.33)',
        }}
      >
        <Box
          component="img"
          src={heroLogo}
          alt="Dr. Wallanns - Gastroenterologia"
          sx={{
            width: 'clamp(180px, 60vw, 260px)',
            height: 'auto',
            mb: 2.5,
            display: 'block',
            mx: 'auto',
          }}
        />
        <Headline fontSize="clamp(1rem, 4.2vw, 1.35rem)" centerOnMobile />
        <Box sx={{ mt: 2, mb: 3 }}>
          <Subheadline fontSize="clamp(0.8rem, 3.5vw, 0.9rem)" justify />
        </Box>
        <CtaButton fullWidth fontSize="clamp(0.78rem, 3.2vw, 0.88rem)" />
      </MotionBox>
    </Box>

  </Box>
);

export default Hero;
