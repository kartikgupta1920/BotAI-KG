import React, { useEffect, useState, useRef } from "react";
import { Box, Button, Stack, TextField, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./ChatInput.module.css"; 

const ChatInput = ({ generateResponse, setScroll, chat, clearChat }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    generateResponse(input);
    setInput("");
    setScroll((prev) => !prev);
  };

  const handleSave = () => {
    const chat_history = JSON.parse(localStorage.getItem("chat")) || [];
    const date = new Date();

    localStorage.setItem(
      "chat",
      JSON.stringify([{ chat: chat, datetime: date }, ...chat_history])
    );

    clearChat();
    setShowSnackbar(true);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Box className={styles.container}>
      <Box component={"form"} onSubmit={handleSubmit} className={styles.form}>
        <Stack direction={"row"} className={styles.stack}>
          <TextField
            placeholder="Chat With AI model Powered By Soul AI"
            className={styles.inputField}
            InputProps={{
              classes: {
                input: styles.input,
              },
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            inputRef={inputRef}
          />
          <Button
            variant="contained"
            type="submit"
            className={`${styles.button} ${
              chat.length > 0 ? styles.smallButton : ""
            }`}
          >
            Ask
          </Button>
          <Button
            variant="outlined"
            onClick={handleSave}
            disabled={!chat.length > 0}
            className={`${styles.button} ${
              chat.length > 0 ? styles.smallButton : ""
            }`}
          >
            Save
          </Button>
        </Stack>
      </Box>
      <Snackbar
        open={showSnackbar}
        message={"Chat saved."}
        onClose={() => setShowSnackbar(false)}
        autoHideDuration={5000}
        action={
          <Link to="/history">
            <Button size="small">See past conversations</Button>
          </Link>
        }
      />
    </Box>
  );
};

export default ChatInput;
