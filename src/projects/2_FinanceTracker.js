import "../App.css";

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";


import TLDR from "../components/blog/TLDR";
import BlogHeading from "../components/blog/BlogHeading";
import BlogTitle from "../components/blog/BlogTitle";
import BlogPara from "../components/blog/BlogPara";
import BlogExample from "../components/blog/BlogExample";
import BlogDate from "../components/blog/BlogDate";

import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';


function Project() {
  return (
      <Box
      sx={{ 
        width:  { xs: "80%", md: "50%" }, 
        margin: "auto", 
        textAlign: "justify", 
        mb: "100px"
      }}
      >
        <BlogTitle>Live Finance Tracker</BlogTitle>
        <Button variant="contained" sx={{background: "white", mr:3, ':hover': {
            backgroundColor: '#FF3A20',
            color: "white"
        }}} startIcon={<GitHubIcon />} href="https://github.com/JonoMN/Finance-Tracker" target="_blank">
            Github
        </Button>
        <Button variant="contained" sx={{background: "white", mr:3, ':hover': {
            backgroundColor: '#FF3A20',
            color: "white"
        }}} startIcon={<DesignServicesIcon />} href="https://www.figma.com/file/fhV2Ymxvr71EF7t3BEPmjq/Finance-Tracker-Website?type=design&node-id=0%3A1&mode=design&t=Wx9mRpjb5mmkuzbz-1" target="_blank">
            Figma
        </Button>
        
          <TLDR>
           A personal finance tracking website using React and TypeScript, featuring live data integration from the UP bank API via Axios. This project highlights my skills in creating secure, user-centric digital solutions.
          </TLDR>
          <BlogHeading>Introduction: </BlogHeading>
          <BlogPara>
            This project showcases a personal finance tracking website, custom-designed in Figma and developed using React with TypeScript. It features seamless integration with the UP banking API through Axios to fetch live financial data securely. The website provides a user-friendly interface that dynamically displays financial insights and account balances, helping users manage their finances effectively. The application is designed with performance and security in mind, ensuring that personal data is handled with utmost care. This project demonstrates my capabilities in full-stack development and my commitment to creating practical, user-oriented solutions.
          </BlogPara>
          <Card
            component="img"
            sx={{
              width: "100%",
              borderRadius: 2,
            }}
            src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/cors-error2.png"
          ></Card>
      </Box>
  );
}

export default Project;
