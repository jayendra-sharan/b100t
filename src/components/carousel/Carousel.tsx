import React, { useState, useEffect } from 'react';
import { Typography, Fade, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const carouselItems = [
  'carouse_text_1',
  'carouse_text_2',
  'carouse_text_3',
  'carouse_text_4',
];

export const Carousel: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // Start fade-out transition
      setFade(false);
      // Wait for fade-out to complete (500ms)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        // Fade-in new text
        setFade(true);
      }, 500);
    }, 3000); // Cycle every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Box height={160} maxWidth={600}>
      <Fade in={fade} timeout={{ enter: 500, exit: 500 }}>
        <Typography
          color="#f5f5dc"
          variant="h5"
          component="p"
          gutterBottom
          sx={{ fontWeight: 500, fontSize: '2rem' }}
        >
          {t(carouselItems[currentIndex])}
        </Typography>
      </Fade>
    </Box>
  );
};
