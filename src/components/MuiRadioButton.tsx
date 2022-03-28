import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="0-2"
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
          />
          <FormControlLabel
            value="3-5"
            control={<Radio color="error" />}
            label="3-5"
          />
          <FormControlLabel
            value="6-10"
            control={<Radio color="info" />}
            label="6-10"
          />
        </RadioGroup>
        <FormHelperText>Invalid selections</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
