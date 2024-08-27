import { Stack } from "@mui/material";
import FirstChat from "../../Components/FirstChat/FirstChat";
import ChatInput from "../../Components/ChatInput/ChatInput";
import ChatCard from "../../Components/ChatCard/ChatCard";
import Feedback from "../../Components/Feedback/Feedback";
import { useEffect, useRef, useState } from "react";
import data from "../../Data/SampleData.json";
import { useOutletContext } from "react-router-dom";
import NavBar from "../../Components/Navbar/Navbar";
import { Theme } from "../../Theme/Theme";
import { useContext } from "react";
import styles from "./Home.module.css"; 

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const listRef = useRef(null);
  const [chatId, setChatId] = useState(1);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const { chat, setChat } = useOutletContext();
  const { mode } = useContext(Theme);

  
  const generateResponse = (input) => {
    const response = data.find(
      (item) => input.toLowerCase() === item.question.toLowerCase()
    );

    let answer = "Sorry, Did not understand your query!";

    if (response !== undefined) {
      answer = response.response;
    }

    setChat((prev) => [
      ...prev,
      {
        type: "Human",
        text: input,
        time: new Date(),
        id: chatId,
      },
      {
        type: "AI",
        text: answer,
        time: new Date(),
        id: chatId + 1,
      },
    ]);

    setChatId((prev) => prev + 2);
  };

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [scrollToBottom]);

  return (
    <Stack
      className={`${styles.container} ${
        mode === "light" ? styles.lightModeBackground : ""
      }`}
    >
      <NavBar />

      {chat.length === 0 && <FirstChat generateResponse={generateResponse} />}

      {chat.length > 0 && (
        <Stack
          height={1}
          flexGrow={0}
          p={{ xs: 2, md: 3 }}
          spacing={{ xs: 2, md: 3 }}
          className={styles.scrollContainer}
          ref={listRef}
        >
          {chat.map((item, index) => (
            <ChatCard
              details={item}
              key={index}
              updateChat={setChat}
              setSelectedChatId={setSelectedChatId}
              showFeedbackModal={() => setShowModal(true)}
            />
          ))}
        </Stack>
      )}

      <ChatInput
        generateResponse={generateResponse}
        setScroll={setScrollToBottom}
        chat={chat}
        clearChat={() => setChat([])}
      />

      <Feedback
        open={showModal}
        updateChat={setChat}
        chatId={selectedChatId}
        handleClose={() => setShowModal(false)}
      />
    </Stack>
  );
}
