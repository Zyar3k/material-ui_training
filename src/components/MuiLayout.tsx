import { Box } from "@mui/material";

const MuiLayout = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        MuiLayout
      </Box>
      <Box
        display="flex"
        width="100px"
        height="100px"
        bgcolor="success.light"
        p={2}
      >
        Second Box
      </Box>
    </>
  );
};

export default MuiLayout;
