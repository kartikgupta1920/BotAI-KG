import { Box, Stack, Typography, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "../../Components/Navbar/Navbar";
import ChatHistory from "../../Components/ChatHistory/ChatHistory";
import Rating from "../../Components/Rating/Rating";
import styles from "./History.module.css"; 

const History = () => {
  const [chats, setChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);

  useEffect(() => {
    const localChats = localStorage.getItem("chat") || [];
    if (localChats.length > 0) {
      setChats(JSON.parse(localChats));
      setFilteredChats(JSON.parse(localChats));
    }
  }, []);

  return (
    <Box className={styles.scrollContainer}>
      <NavBar />
      <Box p={{ xs: 2, md: 3 }}>
        <Typography variant="h2" textAlign={"center"} mb={3}>
          Conversation History
        </Typography>

        {chats.length > 0 && (
          <Rating allChats={chats} ratingChats={setFilteredChats} />
        )}

        {chats.length === 0 && (
          <Typography className={styles.centerText}>
            No saved chats.
          </Typography>
        )}

        {chats.length > 0 && filteredChats.length === 0 && (
          <Typography className={styles.centerText}>
            No such chats.
          </Typography>
        )}

        {filteredChats.length > 0 && (
          <Stack
            spacing={4}
            divider={
              <Divider sx={{ borderColor: "primary.bg", opacity: 0.4 }} />
            }
          >
            {filteredChats.map((item, index) => (
              <ChatHistory details={item} key={index} />
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default History;
