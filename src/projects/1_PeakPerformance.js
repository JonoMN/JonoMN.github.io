import "../App.css";

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";




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
        <BlogTitle>Peak Performance App (QUT Capstone)</BlogTitle>
        <Typography
            variant="h6"
            component="div"
            color="#FF3A20"
          >
            React Native • Node.js • Agile Methodologies • Testing Practices • System Architecture Design
          </Typography>
        
          <TLDR>
            During my QUT Capstone, my team and I, collaborated with Businessnav and Deridale to create Peoplenav, a mobile app digitizing Paul Gardner’s peak performance program. In the planning phase I handled user story creation, risk assessments, and software architecture design, and led all front-end development during implementation.
          </TLDR>

          <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={6} sx={{display: "flex", justifyContent:"center"}}>          
                <img
                height="600px"
                src="/peakPerformance/1T.gif"
                ></img>
            </Grid>
            <Grid item xs={6} >
                <BlogHeading>Introduction</BlogHeading>
                <BlogPara>
                    In the Peoplenav project, a collaboration with Businessnav and Derridale, my team and I developed a mobile application to digitize Paul Gardner's Peak Performance program. My primary responsibility involved front-end development using React Native, integrating libraries like React Native Calendars and Chart Kit to create intuitive user interfaces. Additionally, I was responsible for system designs, including UML class diagrams and ER diagrams, which were crucial for defining the database structure and interactions within the application.
                </BlogPara>
                <BlogPara>
                I also played a significant role in comprehensive testing, employing methodologies such as unit testing, regression testing, and edge case testing to ensure the app's robustness and functionality. Collaborating closely with the backend team, I ensured seamless data synchronization and communication between the frontend and backend services. 
                </BlogPara>
            </Grid>
            <Grid item xs={6}>          
                <BlogHeading>Challenges</BlogHeading>
                <BlogPara>
                    The project came with numerous challenges, each of which was documented and overcome through an indepth risk registry. The first significant challenge we overcame was adapting to a change in project management. We managed this transition by dynamically adjusting our project plan and scope, to accomodate change in requiremnets.       
                </BlogPara>
                <BlogPara>
                    Additionally, we tackled complex legal and ethical issues related to user privacy, ensuring our app complied with Australian privacy laws - a critical aspect that involved rigorous research and consultations with clients.        
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
                    To effectively plan our software architecture, we used UML class diagrams and ER diagrams to define the database structure and interactions. Utilizing React Native, I integrated libraries like React Native Calendars and Chart Kit, enhancing the app's functionality. Collaborating with the backend team, I ensured seamless data synchronization and communication, resulting in a cohesive and robust application design.
                </BlogPara>
            </Grid>
            <Grid item xs={6}>          
                <BlogHeading>Iterative Development</BlogHeading>
                <BlogPara>
                    Our iterative development process, grounded in agile methodologies, was central to refining the Peoplenav app. We employed sprint planning and maintained a detailed backlog to manage tasks effectively. Using burndown charts, we tracked progress and maintained velocity, ensuring we met our goals for each iteration. Continuous Integration (CI) facilitated regular code integration, enabling immediate testing and feedback. This structured approach, including defining epics and planning releases, ensured a systematic and efficient development cycle.
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
                <BlogHeading>Testing</BlogHeading>
                <BlogPara>
                Comprehensive testing was crucial in enhancing the Peoplenav app's functionality and user experience. We conducted acceptance testing to meet client requirements, usability testing to improve the user interface, and unit testing to verify individual components. Regression testing ensured that new changes didn't negatively impact existing features, while edge case testing identified and resolved issues in unusual scenarios, ensuring robustness.
                </BlogPara>
            </Grid>
            <BlogHeading>Conclusion</BlogHeading>
                <BlogPara>
                This project refined my technical drawing and systematic application planning skills, significantly enhancing my expertise in mobile app development, UI/UX design, and comprehensive testing. It also strengthened my project management and compliance abilities, preparing me for future challenges in tech development and digital transformation projects.
                </BlogPara>
          </Grid>

      </Box>
  );
}

export default Project;
