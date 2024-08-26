import React from "react";
import { isEqual, add, startOfDay, format } from "date-fns";
import { Box, Stack, Typography } from "@mui/material";
import ChatCard from "../ChatCard/ChatCard";
import styles from "./ChatHistory.module.css"; 

const ChatHistory = ({ details }) => {
  const formatData = (date) => {
    const today = startOfDay(new Date());

    if (isEqual(date, today)) {
      return `Today's chats`;
    } else if (isEqual(today, add(date, { days: 1 }))) {
      return `Yesterday's chats`;
    } else {
      return format(date, "do LLL yyyy");
    }
  };

  return (
    <Box className={styles.boxHistory}>
      <Typography className={styles.headingHistory}>
        {formatData(startOfDay(new Date(details.datetime)))}
      </Typography>
      <Stack className={styles.chatStack}>
        {details.chat.map((item, index) => (
          <ChatCard details={item} readOnly={true} key={index} />
        ))}
      </Stack>
    </Box>
  );
};

export default ChatHistory;
