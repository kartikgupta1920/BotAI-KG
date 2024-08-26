import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import edit from "../../assets/EditIcon.png";
import logo from "../../assets/logo.png";
import styles from "./Sidebar.module.css"; // Import the CSS module

const Sidebar = ({ setChat, closeMenu }) => {
  return (
    <Box>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Stack
          onClick={() => {
            setChat([]);
            closeMenu();
          }}
          className={styles.sidebarContainer}
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={2}
          px={{ xs: 2, md: 3 }}
        >
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Box component={"img"} src={logo} className={styles.logo} />
            <Typography
              variant={"h5"}
              component={"div"}
              className={styles.newChatText}
            >
              New Chat
            </Typography>
            <Box component={"img"} src={edit} className={styles.logo} />
          </Stack>
        </Stack>
      </Link>
      <Box className={styles.buttonContainer}>
        <Link to={"/history"}>
          <Button variant="contained" sx={{ width: 1 }} onClick={closeMenu}>
            Past Conversations
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
