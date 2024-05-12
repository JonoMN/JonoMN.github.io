import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const experiences = [
  {
    type: "Work Experience",
    items: [
      { date: "Jun 2016", duration: "May 2021", role: "Team Member", company: "Woolworths" },
      { date: "May 2021", duration: "Sep 2022", role: "Software & Systems Developer", company: "Mecha" },
      { date: "Oct 2022", duration: "Feb 2024", role: "IT Officer", company: "ACRRM" },
      { date: "Feb 2016", duration: "Present", role: "Graduate Fullstack Developer", company: "ACRRM" }
    ],
  },
  {
    type: "Volunteer Experience",
    items: [
      { date: "Sep 2021", duration: "Sep 2022", role: "Corporate Events Director", company: "QUT BAMSA" },
      { date: "Sep 2022", duration: "Sep 2023", role: "President", company: "QUT BAMSA" },
      { date: "Jan 2024", duration: "Present", role: "Emerging Professional Committee Member", company: "Australian Computer Society" },
    ],
  },
];

function TimelineComponent() {
  return (
    <Grid container>
      {experiences.map((experience) => (
        <Grid item xs={12} md={6} key={experience.type} style={{paddingLeft: 0}}> 
          <h1>{experience.type}</h1>
          <Timeline align="left"> 
            {experience.items.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent style={{ flex: 0.3 }}>
                  <Typography>{item.date}</Typography>
                  <Typography>{item.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {index < experience.items.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span" color="#FF3A20">
                    {item.role}
                  </Typography>
                  <Typography>{item.company}</Typography>
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