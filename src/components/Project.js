import temp1 from "../img/temp1.jpg";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

function Project() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <Item>
          <img src={temp1} alt="" width="100%" />
        </Item>
      </Grid>
      <Grid item xs={8}>
        <Item>
          <h3>Project 1</h3>
          <p>
            Morbi sodales commodo neque, id fermentum ipsum dapibus ac. In eu
            ipsum elit. Sed nisl erat, vehicula eu lacus tincidunt, bibendum
            ultricies nulla. Quisque rhoncus blandit condimentum.
          </p>
        </Item>
      </Grid>
    </Grid>
  );
}

export default Project;
