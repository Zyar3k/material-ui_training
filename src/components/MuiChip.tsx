import { Chip, Stack, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips(chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip small" color="primary" size="small" />
      <Chip label="Chip" color="error" size="medium" icon={<FaceIcon />} />
      <Chip
        label="Chip outlined"
        color="info"
        size="medium"
        variant="outlined"
        avatar={<Avatar>Z</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete handler called")}
      />
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          color="primary"
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};

export default MuiChip;
