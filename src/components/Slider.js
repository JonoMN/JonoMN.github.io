import React, { useState } from "react";
import { Box, IconButton, styled, useMediaQuery, useTheme } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Slide = styled('li')(({ current, index, slideWidth }) => ({
  display: 'flex',
  opacity: current === index ? 1 : 0.25,
  position: 'relative',
  transition: `
    opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.84),
    transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.84)
  `,
  width: `${slideWidth}vw`, //set the width of the slides
  cursor: current === index ? 'default' : 'pointer',
  '&:hover': current !== index ? {
    opacity: 0.5,
    transform: current < index ? 'translateX(-2%)' : 'translateX(2%)' // Slight shift on hover
  } : {},
  img: {
    width: '100%',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
    padding: '0 2vw',
  }
}));

const SliderControl = ({ type, handleClick }) => (
  <IconButton onClick={handleClick}>
    {type === "previous" ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
  </IconButton>
);

function Slider({ slides }) {
  const [current, setCurrent] = useState(1);
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

  const slideWidth = isMediumUp ? 50 : 80; // Set slide width to 50vw for medium and larger screens, 80vw for smaller screens

  const handlePreviousClick = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((current + 1) % slides.length);
  };

  const handleSlideClick = (index) => {
    if (current !== index) setCurrent(index);
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          margin: `0 ${(100-slideWidth)/2}%`, // Center the slides container
          transition: 'transform 600ms cubic-bezier(0.25, 1, 0.35, 1)',
          transform: `translateX(-${current * (100 / slides.length)}%)`, // Adjust the translation to show the current slide
          width: `${slides.length * slideWidth}vw`, // Ensures the container is wide enough for all slides
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} current={current} index={index} onClick={() => handleSlideClick(index)}>
            <Box>
              <img src={slide.src} onLoad={(event) => event.target.style.opacity = 1} alt={`Slide ${index}`} />
            </Box>
          </Slide>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: '2', width: '100%' }}>
        <SliderControl type="previous" handleClick={handlePreviousClick} />
        <SliderControl type="next" handleClick={handleNextClick} />
      </Box>
    </Box>
  );
};

export default Slider;