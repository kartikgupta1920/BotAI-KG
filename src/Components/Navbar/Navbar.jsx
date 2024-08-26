import React, { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";
import { Stack, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import styles from "./NavBar.module.css"; 

const NavBar = () => {
  const { handleMobileMenu } = useOutletContext();
  const isMobile = useMediaQuery("(max-width:800px)");
  const { setMode, mode } = useContext(ThemeContext);

  return (
    <Stack component={"header"} className={styles.header}>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        {isMobile && (
          <MenuIcon onClick={() => handleMobileMenu((prev) => !prev)} />
        )}

        <Link to={"/"} className={styles.link}>
          <Typography variant="h1" component={"h1"} className={styles.title}>
            Bot AI
          </Typography>
        </Link>
      </Stack>
      <Stack direction={"row"} spacing={0.2} alignItems={"center"}>
        <Typography className={styles.modeText}>{mode}</Typography>
        <IconButton
          onClick={() =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default NavBar;
