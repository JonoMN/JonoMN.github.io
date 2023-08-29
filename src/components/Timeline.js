import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function TimelineComponent() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Jun 2016 - May 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Team Member
          </Typography>
          <Typography>Woolworths</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          May 2021 - Sep 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Software & Systems Developer
          </Typography>
          <Typography>Mecha</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Sep 2021 - Sep 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Corporate Events Director
          </Typography>
          <Typography>BAMSA</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Sep 2022 - Sep 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            President
          </Typography>
          <Typography>BAMSA</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Oct 2022 - Current
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            IT Officer
          </Typography>
          <Typography>ACRRM</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Future
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            #1 Fullstack Developer
          </Typography>
          <Typography>Earth</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimelineComponent;
