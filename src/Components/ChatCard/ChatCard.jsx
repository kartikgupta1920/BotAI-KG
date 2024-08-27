import React, { useEffect, useState } from "react";
import { Stack, Box, Typography, IconButton, Rating } from "@mui/material";
import { format } from "date-fns";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ai from "../../Assets/logo.png";
import person from "../../Assets/person.png";
import styles from "./ChatCard.module.css"; 

const ChatCard = ({
  details,
  showFeedbackModal,
  updateChat,
  setSelectedChatId,
  readOnly = false,
}) => {
  const [isRating, setIsRating] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (isRating) {
      updateChat((prev) =>
        prev.map((item) => {
          if (item.id == details.id) {
            return { ...item, rating: rating || 0 };
          } else {
            return { ...item };
          }
        })
      );
    }
  }, [rating]);

  return (
    <Stack
      className={`${styles.card} ${!readOnly && styles.cardHover}`}
      sx={{
        "&:hover .feedback-btns": {
          visibility: "visible",
          opacity: 1,
        },
      }}
      bgcolor={readOnly ? "primary.main" : "primary.light"}
    >
      <Box
        component={"img"}
        src={details.type == "AI" ? ai : person}
        height={{ xs: 30, md: 68 }}
        width={{ xs: 30, md: 68 }}
        className={styles.image}
      />
      <Typography className={styles.heading}>
        {details.type == "AI" ? "Soul AI" : "You"}
      </Typography>
      <Typography className={styles.text}>{details.text}</Typography>
      <Stack direction={"row"} gap={2} alignItems={"center"} mt={1}>
        <Typography className={styles.time}>
          {format(details.time, "hh:mm a")}
        </Typography>
        {details.type == "AI" && !readOnly && (
          <Stack
            direction={"row"}
            className={`${styles.feedbackBtns} ${
              !isRating ? styles.hiddenFeedbackBtns : ""
            }`}
          >
            <IconButton
              size="small"
              onClick={() => setIsRating((prev) => !prev)}
            >
              {!isRating ? <ThumbUpOffAltIcon fontSize="inherit" /> : <ThumbUpAltIcon fontSize="inherit" />}
            </IconButton>
            <IconButton
              size="small"
              onClick={() => {
                setSelectedChatId(details.id);
                showFeedbackModal();
              }}
            >
              <ThumbDownOffAltIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        )}
      </Stack>

      {(isRating || details.rating > 0) && details.type == "AI" && (
        <Box className={styles.ratingContainer}>
          <Typography component={"legend"} className={styles.legend}>
            {readOnly ? "Rating:" : "Rate this response:"}
          </Typography>
          <Rating
            name="simple-controlled"
            value={details.rating > 0 ? details.rating : rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{
              width: "auto",
            }}
            readOnly={readOnly}
          />
        </Box>
      )}
      {details.feedback && (
        <Typography className={styles.feedbackText}>
          <Box component={"span"} className={styles.feedbackLabel}>
            Feedback:
          </Box>
          <Box component={"span"}>{` ${details.feedback}`}</Box>
        </Typography>
      )}
    </Stack>
  );
};

export default ChatCard;
