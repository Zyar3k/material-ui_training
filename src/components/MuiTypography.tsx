import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading = h1 html tag
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum vitae
        suscipit nemo sunt, tempora facere optio enim itaque, quas iure quod
        ratione reiciendis provident consequuntur minima corporis harum ab
        aspernatur.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        doloribus maiores consequatur distinctio sapiente repellendus sequi,
        aperiam temporibus quos reprehenderit maxime laudantium esse delectus
        incidunt aliquam, illo cumque laborum unde.
      </Typography>
    </div>
  );
};

export default MuiTypography;
