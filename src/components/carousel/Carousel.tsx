import React, { useState, useEffect } from 'react';
import { Typography, Fade, Box } from '@mui/material';

const carouselItems = [
  "Turn Dreams into Checkmarks – Create Your Best Life List.",
  "Set Goals. Inspire Others. Stay Motivated.",
  "The No-Nonsense Goal-Setting Network – Focus. Achieve. Repeat.",
  "Goals that Matter. Progress that Shows. A Community that Cares.",
];

export const Carousel: React.FC = () => {
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
    <Box height={160}>
      <Fade in={fade} timeout={{ enter: 500, exit: 500 }}>
        <Typography color='#f5f5dc' variant="h5" component="p" gutterBottom sx={{ fontWeight: 500, fontSize: '2rem' }}>
          {carouselItems[currentIndex]}
        </Typography>
      </Fade>
    </Box>
  );
};
