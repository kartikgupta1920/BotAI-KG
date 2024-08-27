import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import logo from "../../Assets/logo.png";
import Card from "../Card/Card";
import styles from "./FirstChat.module.css"; 

const FirstChat = ({ generateResponse }) => {
  const InitialData = [
    {
      heading: "Hi, what is the weather",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is my location",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is the temperature",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, how are you",
      subtext: "Get immediate AI generated response",
    },
  ];

  return (
    <Stack className={styles.container}>
      <Stack className={styles.header} spacing={2}>
        <Typography variant="h2" className={styles.title}>
          How Can I Help You Today?
        </Typography>
        <Box component={"img"} src={logo} className={styles.logo} />
      </Stack>
      <Grid container spacing={{ xs: 1, md: 3 }}>
        {InitialData.map((item) => (
          <Grid item key={item.heading} xs={12} md={6}>
            <Card
              heading={item.heading}
              subtext={item.subtext}
              handleClick={generateResponse}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default FirstChat;
