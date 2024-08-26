import React, { useEffect, useState } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import styles from "./Rating.module.css"; 

const Rating = ({ allChats, ratingChats }) => {
  const [option, setOption] = useState("All Ratings");

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  useEffect(() => {
    if (option === "All Ratings") {
      ratingChats(allChats);
    } else {
      const Rated = allChats.filter((item) => {
        let found = false;

        item.chat.forEach((ch) => {
          if (ch.rating === option) {
            found = true;
          }
        });

        return found;
      });

      ratingChats(Rated);
    }
  }, [option, allChats, ratingChats]);

  return (
    <Box className={styles.ratingBox}>
      <Typography className={styles.ratingLabel}>Filter by rating</Typography>
      <Select
        value={option}
        onChange={handleChange}
        size="small"
        className={styles.select}
      >
        <MenuItem value="All Ratings">All Ratings</MenuItem>
        <MenuItem value={1}>1 Star</MenuItem>
        <MenuItem value={2}>2 Stars</MenuItem>
        <MenuItem value={3}>3 Stars</MenuItem>
        <MenuItem value={4}>4 Stars</MenuItem>
        <MenuItem value={5}>5 Stars</MenuItem>
      </Select>
    </Box>
  );
};

export default Rating;
