import React, { useState } from 'react';
import { Grid, Collapse, IconButton, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, timelineItemClasses } from '@mui/lab';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';


const experiences = [
  {
    type: "Work Experience",
    items: [
      { startDate: "Jun 2016", endDate: "Jun 2016", duration: "5 years", role: "Team Member", company: "Woolworths", description:"At Woolworths, I gained five years of experience in customer service, team collaboration, and time management, enhancing my communication skills and ability to work under pressure." },
      { startDate: "May 2021", endDate: "Jun 2016", duration: "3 years", role: "Software & Systems Developer", company: "Mecha", description: "As a Software & Systems Developer at Mecha, I upgraded IT systems to MS365, including SharePoint for file management and Exchange for email. Collaborating with stakeholders, I integrated MS Power Apps, Forms, and Lists to automate work processes, significantly enhancing safety, efficiency, and overall organizational productivity." },
      { startDate: "Oct 2022", endDate: "Jun 2016", duration: "3 years", role: "IT Officer", company: "ACRRM", description: "As an IT Officer at ACRRM, I collaborated with stakeholders on IT maintenance, repair, and troubleshooting. I created and maintained SharePoint sites, ensured security, developed Power Apps and forms, and managed user accounts. All tasks involved front-facing collaboration with internal and external stakeholders, ensuring efficient IT operations and enhancing overall productivity." },
      { startDate: "Feb 2016", endDate: "Jun 2016", duration: "Currently", role: "Graduate Fullstack Developer", company: "ACRRM", description: "As a Graduate Fullstack Developer at ACRRM, I develop and maintain applications using React and .NET. I manage version control with Git, utilize CI/CD pipelines for seamless deployment, and adhere to agile (Scrum) methodologies. My role involves collaborating with cross-functional teams, ensuring efficient software delivery, and enhancing system integration." }
    ],
  },
  {
    type: "Volunteer Experience",
    items: [
      { startDate: "Sep 2021", endDate: "Jun 2016", duration: "1 year", role: "Corporate Events Director", company: "QUT BAMSA", description: "The corporate events director is a managerial role that takes charge of designing, planning, and communicating with venues for all corporate events throughout the year." },
      { startDate: "Sep 2022", endDate: "Jun 2016", duration: "1 year", role: "President", company: "QUT BAMSA", description: "The president represents BAMSA as the spokesperson, sets the strategic direction of the club, prioritises goals and oversees the delivery of outcomes, presides and leads during club meetings and preserves order, acting as the club's leader and ambassador to represent team members." },
      { startDate: "Jan 2024", endDate: "Jun 2016", duration: "Currently", role: "Emerging Professional Committee Member", company: "Australian Computer Society", description: "The ACS Queensland Emerging Professionals Committee supports and encourages students and recent graduates interested in technology careers to engage with the local ACS Queensland ICT Community. It aims to help the ACS Queensland Branch by acquiring new members, increasing member retention, strategising for student-focused events, and fostering collaboration with industry and education providers." },
    ],
  },
];

function TimelineComponent() {
  const [collapseStates, setCollapseStates] = useState(
    experiences.map(exp => exp.items.map(() => false))
  );

  const handleToggle = (expIndex, itemIndex) => {
    setCollapseStates(prevStates => 
      prevStates.map((expState, i) => 
        i === expIndex 
          ? expState.map((state, j) => (j === itemIndex ? !state : state))
          : expState
      )
    );
  };

  return (
    <Grid container justifyContent="flex-start">
      {experiences.map((experience, expIndex) => (
        <Grid item xs={12} md={6} key={experience.type}>
          <Typography variant="h4" gutterBottom>{experience.type}</Typography>
          <Timeline sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}>
            {experience.items.map((item, itemIndex) => (
              <TimelineItem key={itemIndex} onClick={() => handleToggle(expIndex, itemIndex)}>
                <TimelineSeparator>
                  <IconButton>
                    {collapseStates[expIndex][itemIndex] ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                  </IconButton>
                  {itemIndex < experience.items.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" color="#FF3A20">
                    {item.role}
                  </Typography>
                  <Typography>{item.duration} @ {item.company}</Typography>
                  <Collapse in={collapseStates[expIndex][itemIndex]} >
                    <Typography color="text.secondary">{item.startDate} - {item.endDate}</Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                  </Collapse>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      ))}
    </Grid>
  );
}

export default TimelineComponent;