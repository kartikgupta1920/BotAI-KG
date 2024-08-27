import React, { useState, useEffect, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Theme } from "./Theme/Theme";
import Sidebar from "../src/Components/SideBar/SideBar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getThemePallete } from "../src/Theme/ThemePallate";
import { Grid } from "@mui/material";
import styles from "./App.module.css"; 

function App() {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");
  const [chat, setChat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  
  const theme = useMemo(() => createTheme(getThemePallete(mode)), [mode]);

  
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <Theme.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container className={styles.container}>
          <Grid
            item
            xs={12}
            md={2.5}
            className={`${styles.sidebar} ${
              menuOpen ? styles.mobileSidebarOpen : styles.mobileSidebar
            } ${menuOpen ? styles.fixedPosition : styles.relativePosition}`}
            height={"100vh"}
            zIndex={{ xs: menuOpen ? styles.highZIndex : styles.defaultZIndex, md: styles.defaultZIndex }}
            boxShadow={{ xs: menuOpen ? styles.boxShadow : styles.noBoxShadow, md: styles.noBoxShadow }}
          >
            <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
          </Grid>
          <Grid item xs={12} md={9.5}>
            <Outlet
              context={{
                chat,
                setChat,
                handleMobileMenu: setMenuOpen,
              }}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Theme.Provider>
  );
}

export default App;

