import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  console.log(countries);

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleOnChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="info"
        helperText="Please select your country"
        error
      >
        <MenuItem value="PL">Poland</MenuItem>
        <MenuItem value="DE">Germany</MenuItem>
        <MenuItem value="US">United States</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
