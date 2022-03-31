import { Stack, Link, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Typography variant="h2">
        <Link href="#" color="secondary" underline="hover">
          Secondary
        </Link>
      </Typography>
      <Link href="#" underline="none">
        None
      </Link>
    </Stack>
  );
};

export default MuiLink;
