import React, { forwardRef, useState } from "react";
import { Snackbar, Button, Alert, AlertProps } from "@mui/material";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Submit
      </Button>
      {/* <Snackbar
        message="Your message has been sent"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
    /> */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Your message has been sent
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;
