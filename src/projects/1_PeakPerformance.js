import "../App.css";

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";



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
        <BlogTitle>Peak Performance App</BlogTitle>
        
          <TLDR>
            During my QUT Capstone, my team and I, collaborated with Businessnav and Deridale to create Peoplenav, a mobile app digitizing Paul Gardner’s peak performance program. In the planning phase I handled user story creation, risk assessments, and software architecture design, and led all front-end development during implementation.
          </TLDR>

          <Grid container>
            <Grid item xs={6} sx={{display: "flex", justifyContent:"center"}}>          
                <img
                height="600px"
                src="/peakPerformance/1T.gif"
                ></img>
            </Grid>
            <Grid item xs={6}>
                <BlogHeading>Introduction</BlogHeading>
                <BlogPara>
                In the Peoplenav project, a collaboration with Businessnav and Derridale, my team and I developed a mobile application to digitize Paul Gardner's Peak Performance program. My primary responsibility involved front-end development, where I utilized React Native to create intuitive user interfaces, enhancing my skills in both mobile app development and UI/UX design.
                </BlogPara>
            </Grid>
            <Grid item xs={6}>          
                <BlogHeading>Challenges</BlogHeading>
                <BlogPara>
                A significant challenge we overcame was adapting to a change in project management. We managed this transition by dynamically adjusting our designs and approach, which improved my adaptability and problem-solving capabilities. Additionally, we tackled complex legal and ethical issues related to user privacy, ensuring our app complied with Australian privacy laws—a critical aspect that involved rigorous research and consultations with clients.        
                </BlogPara>
            </Grid>
            <Grid item xs={6} sx={{display: "flex", justifyContent:"center"}}>
                <img
                height="600px"
                src="/peakPerformance/3T.gif"
                ></img>
            </Grid>
            <Grid item xs={6} sx={{display: "flex", justifyContent:"center"}}>          
                <img
                height="600px"
                src="/peakPerformance/4T.gif"
                ></img>
            </Grid>
            <Grid item xs={6}>
                <BlogHeading>Software Design</BlogHeading>
                <BlogPara>
                To visualize and plan our software architecture effectively, we used UML class diagrams and ER diagrams, tools that were instrumental in defining the database structure and the interactions within the application. This practice not only refined my technical drawing skills but also deepened my understanding of systematic application planning.
                </BlogPara>
            </Grid>
            <Grid item xs={6}>          
                <BlogHeading>Iterative Development & Testing</BlogHeading>
                <BlogPara>
                Through iterative development and testing, including acceptance and usability testing, we refined the app to improve functionality and user experience, resulting in a robust prototype that laid a strong foundation for future development phases. These processes allowed me to deepen my understanding of user-centered design and agile methodologies, preparing me for future challenges in tech project management and development.
                </BlogPara>
            </Grid>
            <Grid item xs={6} sx={{display: "flex", justifyContent:"center"}}>
                <img
                height="600px"
                src="/peakPerformance/5T.gif"
                ></img>
            </Grid>
            <Grid item xs={6} sx={{display: "flex", justifyContent:"center"}}>          
                <img
                height="600px"
                src="/peakPerformance/6T.gif"
                ></img>
            </Grid>
            <Grid item xs={6}>          
                <BlogHeading>Conclusion</BlogHeading>
                <BlogPara>
                This project not only advanced my technical skills in using cutting-edge technologies but also enhanced my abilities in project management and compliance, preparing me for future challenges in tech development and digital transformation projects.
                </BlogPara>
            </Grid>
          </Grid>

      </Box>
  );
}

export default Project;
