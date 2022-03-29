import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcons from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          expandIcon={<ExpandMoreIcons />}
          aria-controls="panel1-content"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ratione
          iure temporibus corporis nostrum, enim ad dolorum eos nam blanditiis.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          expandIcon={<ExpandMoreIcons />}
          aria-controls="panel2-content"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ratione
          iure temporibus corporis nostrum, enim ad dolorum eos nam blanditiis.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          expandIcon={<ExpandMoreIcons />}
          aria-controls="panel3-content"
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ratione
          iure temporibus corporis nostrum, enim ad dolorum eos nam blanditiis.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
