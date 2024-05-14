import React, { useState, useRef } from "react";
import { Box, Button, Grid, IconButton, styled, Typography } from "@mui/material";
import { GitHub as GitHubIcon, DesignServices as DesignServicesIcon, ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';
import TLDR from "../components/blog/TLDR";
import BlogHeading from "../components/blog/BlogHeading";
import BlogTitle from "../components/blog/BlogTitle";
import BlogPara from "../components/blog/BlogPara";
import "../App.css";

const slideData = [
  { index: 0, src: '/FinanceTracker/Accounts.png' },
  { index: 1, src: '/FinanceTracker/Dashboard.png' },
  { index: 2, src: '/FinanceTracker/Transactions.png' },
];

const Slide = styled('li')(({ current, index }) => ({
  display: 'flex',
  margin: '0 10vmin',
  opacity: current === index ? 1 : 0.25,
  position: 'relative',
  transition: `
    opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.84),
    transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.84)
  `,
  width: '70vmin',
  cursor: current === index ? 'default' : 'pointer',
  '&:hover': 
  current !== index ? {
    opacity: 0.5,
    transform: current < index ? 'translateX(-2%)' : 'translateX(2%)'
  } : {},
  img: {
    width: '800px',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out'
  }
}));

const SliderControl = ({ type, handleClick }) => (
  <IconButton onClick={handleClick}>
    {type === "previous" ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
  </IconButton>
);

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(1);

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
    <Box sx={{ position: 'relative', height: '55vmin', margin: 'auto' }}>
      <Box
        sx={{
          display: 'flex',
          margin: '0 calc(-2vmin)',
          position: 'absolute',
          transition: 'transform 600ms cubic-bezier(0.25, 1, 0.35, 1)',
          transform: `translateX(-${current * (100 / slides.length)}%)`
        }}
      >
        {slides.map(slide => (
          <Slide key={slide.index} current={current} index={slide.index} onClick={() => handleSlideClick(slide.index)}>
            <Box position="relative" width="100%">
              <img src={slide.src} onLoad={(event) => event.target.style.opacity = 1} />
            </Box>
          </Slide>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: 'calc(100% + 1rem)', width: '100%' }}>
        <SliderControl type="previous" handleClick={handlePreviousClick} />
        <SliderControl type="next" handleClick={handleNextClick} />
      </Box>
    </Box>
  );
};

function Project() {
  return (
    <Box
      sx={{
        width: { xs: "80%", md: "50%" },
        margin: "auto",
        textAlign: "justify",
        mb: "100px"
      }}
    >
      <BlogTitle>Live Finance Tracker</BlogTitle>
      <Typography
            sx={{pb:3, mt:-2}}
            variant="h6"
            component="div"
            color="#FF3A20"
          >
            React • Typescript • Figma • Axios
          </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 , }}>
        <Button
          variant="contained"
          sx={{ background: "white", ':hover': { backgroundColor: '#FF3A20', color: "white" } }}
          startIcon={<GitHubIcon />}
          href="https://github.com/JonoMN/Finance-Tracker"
          target="_blank"
        >
          Github
        </Button>
        <Button
          variant="contained"
          sx={{ background: "white", ':hover': { backgroundColor: '#FF3A20', color: "white" } }}
          startIcon={<DesignServicesIcon />}
          href="https://www.figma.com/file/fhV2Ymxvr71EF7t3BEPmjq/Finance-Tracker-Website?type=design&node-id=0%3A1&mode=design&t=Wx9mRpjb5mmkuzbz-1"
          target="_blank"
        >
          Figma
        </Button>
      </Box>
      <TLDR>
        A personal finance tracking website using React and TypeScript, featuring live data integration from the UP bank API via Axios. This project highlights my skills in creating secure, user-centric digital solutions.
      </TLDR>
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <BlogPara>
            This project showcases a personal finance tracking website, custom-designed in Figma and developed using React with TypeScript. It features seamless integration with the UP banking API through Axios to fetch live financial data securely. The website provides a user-friendly interface that dynamically displays financial insights and account balances, helping users manage their finances effectively. The application is designed with performance and security in mind, ensuring that personal data is handled with utmost care. This project demonstrates my capabilities in full-stack development and my commitment to creating practical, user-oriented solutions.
          </BlogPara>
        </Grid>
        <Grid item xs={12}>
          <Slider slides={slideData} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Project;