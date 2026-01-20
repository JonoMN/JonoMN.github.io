import { useState } from 'react';
import { Grid, Collapse, IconButton, Typography } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
} from '@mui/lab';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { Experience } from '../types/timeline';

const experiences: Experience[] = [
  {
    type: 'Work Experience',
    items: [
      {
        startDate: 'Nov 2023',
        endDate: 'Current',
        duration: 'Currently',
        role: 'Graduate Developer',
        company: 'Australian College of Rural and Remote Medicine',
        description:
          'Analyse system requirements and contribute to technical design for enterprise web and mobile applications. Design, develop, and maintain backend REST APIs, application logic, and database integrations. Support production systems by investigating issues, diagnosing defects, and implementing fixes. Write and maintain unit and integration tests to ensure application reliability and quality. Collaborate within agile delivery teams to plan, develop, test, and release software enhancements. Contribute to CI/CD pipelines and deployment processes to support reliable releases across environments.',
      },
      {
        startDate: 'Oct 2022',
        endDate: 'Nov 2023',
        duration: '1 year, 1 month',
        role: 'IT Support Officer',
        company: 'Australian College of Rural and Remote Medicine',
        description:
          'Resolved hardware and software issues for various IT systems and devices. Documented technical processes and created user guides for staff training purposes. Managed help desk inquiries through ticketing system, prioritizing urgent requests effectively.',
      },
      {
        startDate: 'May 2021',
        endDate: 'Sep 2022',
        duration: '1 year, 5 months',
        role: 'Microsoft Power Platform Developer',
        company: 'Mecha Pty Ltd',
        description:
          'Developed Power Platform solutions using Power Apps, Power Automate, Power BI, and SharePoint. Collaborated with stakeholders to deliver and support business solutions.',
      },
    ],
  },
  {
    type: 'Leadership & Service',
    items: [
      {
        startDate: 'Jan 2024',
        endDate: 'Present',
        duration: 'Currently',
        role: 'Young Tech Ambassador',
        company: 'Australian Computer Society',
        description:
          "Participant in the ACS Young Tech Ambassador (YTA) Program, helping high school students get excited about tech careers while boosting leadership and communication skills.",
      },
      {
        startDate: '2024',
        endDate: '2025',
        duration: '2024 – 2025',
        role: 'Chair, Emerging Professionals Committee',
        company: 'Australian Computer Society',
        description:
          'Leading the ACS Queensland Emerging Professionals Committee, which supports and encourages students and recent graduates interested in technology careers to engage with the local ACS Queensland ICT Community.',
      },
      {
        startDate: '2022',
        endDate: '2023',
        duration: '2022 – 2023',
        role: 'Committee Member, Emerging Professionals Committee',
        company: 'Australian Computer Society',
        description:
          'Supported the ACS Queensland Emerging Professionals Committee in acquiring new members, increasing member retention, strategising for student-focused events, and fostering collaboration with industry and education providers.',
      },
      {
        startDate: 'Jan 2023',
        endDate: 'Nov 2023',
        duration: '11 months',
        role: 'Volunteer Mentor',
        company: 'CoderDojo',
        description:
          'Volunteered as a mentor, helping young people learn coding and technology skills in a supportive, community-driven environment.',
      },
    ],
  },
];

function TimelineComponent(): JSX.Element {
  const [collapseStates, setCollapseStates] = useState<boolean[][]>(
    experiences.map((exp) => exp.items.map((_, index) => index === 0))
  );

  const handleToggle = (expIndex: number, itemIndex: number): void => {
    setCollapseStates((prevStates) =>
      prevStates.map((expState, i) =>
        i === expIndex ? expState.map((state, j) => (j === itemIndex ? !state : state)) : expState
      )
    );
  };

  return (
    <Grid container justifyContent="flex-start">
      {experiences.map((experience, expIndex) => (
        <Grid item xs={12} md={6} key={experience.type}>
          <Typography variant="h4" gutterBottom>
            {experience.type}
          </Typography>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {experience.items.map((item, itemIndex) => (
              <TimelineItem key={itemIndex} onClick={() => handleToggle(expIndex, itemIndex)}>
                <TimelineSeparator>
                  <IconButton
                    aria-label={collapseStates[expIndex][itemIndex] ? 'Collapse section' : 'Expand section'}
                  >
                    {collapseStates[expIndex][itemIndex] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                  {itemIndex < experience.items.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="#FF3A20">
                    {item.role}
                  </Typography>
                  <Typography>
                    {item.duration} @ {item.company}
                  </Typography>
                  <Collapse in={collapseStates[expIndex][itemIndex]}>
                    <Typography color="text.secondary">
                      {item.startDate} - {item.endDate}
                    </Typography>
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
