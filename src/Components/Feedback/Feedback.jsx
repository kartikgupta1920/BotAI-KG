import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Feedback.module.css"; 

const Feedback = ({ open, handleClose, chatId, updateChat }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    updateChat((prev) =>
      prev.map((item) => {
        if (item.id === chatId) {
          return { ...item, feedback: input };
        } else {
          return item;
        }
      })
    );

    setInput("");
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={styles.modalBox}>
        <Stack
          direction={"row"}
          className={styles.modalHeader}
        >
          <Stack
            direction={"row"}
            className={styles.headerTitle}
          >
            <FeedbackIcon />
            <Typography className={styles.heading}>
              Provide Additional Feedback
            </Typography>
          </Stack>

          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box
          component="form"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <TextField
            multiline
            rows={6}
            className={styles.textField}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Feedback;
