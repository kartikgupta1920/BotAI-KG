import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import styles from "./Card.module.css"; 

const Card = ({ heading, subtext, handleClick }) => {
  return (
    <Stack
      className={styles.cardContainer}
      onClick={() => handleClick(heading)}
    >
      <Box>
        <Typography variant="heading" className={styles.cardHeading}>
          {heading}
        </Typography>
        <Typography className={styles.cardSubtext}>{subtext}</Typography>
      </Box>
    </Stack>
  );
};

export default Card;
