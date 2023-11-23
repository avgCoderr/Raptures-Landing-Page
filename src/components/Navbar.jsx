import React from "react";
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  ThemeProvider,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../assets/logo.svg";

const theme = createTheme({
  typography: {
    fontFamily: "'Manrope', sans-serif",
  },
});

const NavBar = () => {
  const appBarStyle = {
    position: "fixed",
    borderRadius: "0px 0px 20px 20px",
    background:
      "var(--glass, radial-gradient(151.92% 127.02% at 15.32% 20%, rgba(159, 217, 255, 0.04) 100%, rgba(70, 144, 212, 0.00) 10%))",
    backdropFilter: "blur(100px)",
  };

  const logoStyle = {
    width: "120px",
    height: "auto",
    marginLeft: "2rem",
  };

  const linkStyle = {
    marginLeft: 8,
    color: "inherit",
    textDecoration: "none",
  };

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" sx={appBarStyle}>
        <Toolbar>
          <Link href="/home" color="inherit">
            <img src={logo} alt="Logo" style={logoStyle} />
          </Link>
          <IconButton
            sx={{ display: { sm: "block", md: "none" } }}
            onClick={toggleMobileMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
            sx={{ background: "transparent" }}
          >
            <Box p={2}>
              <Typography variant="h6">Menu</Typography>
            </Box>
            <List>
              <ListItem>
                <Link
                  href="/team"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  <ListItemText primary="Team" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/tech"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  <ListItemText primary="Technology" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/features"
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  <ListItemText primary="Features" />
                </Link>
              </ListItem>
            </List>
          </Drawer>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              marginLeft: "auto",
              marginRight: "4rem",
              flexDirection: "row",
            }}
          >
            <Link href="/team" color="inherit" sx={linkStyle}>
              Team
            </Link> 
            <Link href="/tech" color="inherit" sx={linkStyle}>
              Technology
            </Link>
            <Link href="/features" color="inherit" sx={linkStyle}>
              Features
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
