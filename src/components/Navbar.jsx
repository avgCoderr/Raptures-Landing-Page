import React from "react";
import { AppBar, Toolbar, Link, Box, Button } from "@mui/material";

import logo from "../assets/logo.svg";

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

  const linkStyle = { marginLeft: 8, color: "inherit", textDecoration: "none" };
  const buttonStyle = {
    marginLeft: 8,
    color: "inherit",
    padding: "0.6rem 2.2rem 0.6rem 2.2rem",
    borderRadius: "5px",
    background:
      "var(--glass, radial-gradient(151.92% 127.02% at 15.32% 10%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 100%, rgba(70, 144, 212, 0.00) 0%))",
  };

  return (
    <AppBar position="fixed" sx={appBarStyle}>
      <Toolbar>
        <Link href="/home" color="inherit">
          <img src={logo} alt="Logo" style={logoStyle} />
        </Link>
        <Box sx={{ marginLeft: "auto", marginRight: "4rem" }}>
          <Link href="/docs" color="inherit" sx={linkStyle}>
            Docs
          </Link>
          <Link href="/features" color="inherit" sx={linkStyle}>
            Features
          </Link>
          <Link href="/blog" color="inherit" sx={linkStyle}>
            Blog
          </Link>
          <Link href="/pricing" color="inherit" sx={linkStyle}>
            Pricing
          </Link>
          <Link href="/company" color="inherit" sx={linkStyle}>
            Company
          </Link>
          <Button sx={buttonStyle}>Start</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
