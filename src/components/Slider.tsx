import { useState } from 'react';
import { Box, IconButton, styled, useMediaQuery, useTheme } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface SlideProps {
  current: number;
  index: number;
  slideWidth: number;
  imagePadding: string;
  maxHeight?: string;
  imageMargin?: string;
}

const Slide = styled('li')<SlideProps>(({ current, index, slideWidth, imagePadding, maxHeight, imageMargin }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: current === index ? 1 : 0.25,
  position: 'relative',
  transition: `
    opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.84),
    transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.84)
  `,
  width: `${slideWidth}vw`,
  cursor: current === index ? 'default' : 'pointer',
  '&:hover':
    current !== index
      ? {
          opacity: 0.5,
          transform: current < index ? 'translateX(-2%)' : 'translateX(2%)',
        }
      : {},
  img: {
    width: '100%',
    height: 'auto',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
    padding: imagePadding,
    ...(imageMargin && { margin: imageMargin }),
    ...(maxHeight && { maxHeight, objectFit: 'contain' }),
  },
}));

interface SliderControlProps {
  type: 'previous' | 'next';
  handleClick: () => void;
}

const SliderControl = ({ type, handleClick }: SliderControlProps): JSX.Element => (
  <IconButton onClick={handleClick} aria-label={type === 'previous' ? 'Previous slide' : 'Next slide'}>
    {type === 'previous' ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
  </IconButton>
);

interface SlideData {
  index: number;
  src: string;
}

interface SliderProps {
  slides: SlideData[];
  imagePadding?: string;
  maxHeight?: string;
  imageMargin?: string;
  slideWidth?: number;
}

function Slider({ slides, imagePadding = '0 2vw', maxHeight, imageMargin, slideWidth: customSlideWidth }: SliderProps): JSX.Element {
  const [current, setCurrent] = useState<number>(1);
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

  const slideWidth = customSlideWidth ?? (isMediumUp ? 50 : 80);

  const handlePreviousClick = (): void => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const handleNextClick = (): void => {
    setCurrent((current + 1) % slides.length);
  };

  const handleSlideClick = (index: number): void => {
    if (current !== index) setCurrent(index);
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          margin: `0 ${(100 - slideWidth) / 2}%`,
          transition: 'transform 600ms cubic-bezier(0.25, 1, 0.35, 1)',
          transform: `translateX(-${current * (100 / slides.length)}%)`,
          width: `${slides.length * slideWidth}vw`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            current={current}
            index={index}
            slideWidth={slideWidth}
            imagePadding={imagePadding}
            maxHeight={maxHeight}
            imageMargin={imageMargin}
            onClick={() => handleSlideClick(index)}
          >
            <Box>
              <img
                src={slide.src}
                onLoad={(event) => {
                  (event.target as HTMLImageElement).style.opacity = '1';
                }}
                alt={`Slide ${index}`}
              />
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
}

export default Slider;
