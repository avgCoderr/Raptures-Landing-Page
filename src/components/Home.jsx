import React from "react";
import {
  Box,
  Typography,
  Button,
  ThemeProvider,
  Container,
  Grid,
  useMediaQuery,
  Tooltip,
  IconButton,
} from "@mui/material";
import { createTheme, useTheme } from "@mui/material/styles";

import NotStartedOutlinedIcon from "@mui/icons-material/NotStartedOutlined";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

import "./Home.css";
import Loading from "./Loading";

import imgSrc from "../assets/mockups.png";

const theme = createTheme({
  typography: {
    fontFamily: "'Manrope', sans-serif",
  },
});

const HomeScreen = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const img = new Image();
    img.src = imgSrc;

    img.onload = () => {
      setLoading(false);
    };
  }, []);

  const parentBoxStyle = {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    position: "relative",
  };

  const currentTheme = useTheme();
  const isMobileView = useMediaQuery(currentTheme.breakpoints.down("sm"));

  const titleFontSize = isMobileView ? "2rem" : "3rem";
  const descriptionFontSize = isMobileView ? "1.2rem" : "1.5rem";

  const contentStyle = {
    padding: isMobileView ? "1rem" : "2rem",
    color: "white",
  };

  const titleStyle = {
    marginBottom: "1rem",
    fontSize: titleFontSize,
    fontWeight: "bold",
    color: "white",
  };

  const descriptionStyle = {
    fontSize: descriptionFontSize,
    fontWeight: 50,
    marginBottom: "0.5rem",
  };

  const buttonsContainerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  };

  const contactLinksContainerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    marginBottom: "1rem",
  };

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Box sx={parentBoxStyle}>
            <Container maxWidth="lg">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} lg={5}>
                  <Box sx={contentStyle}>
                    <Typography variant="h1" sx={titleStyle}>
                      Forget what you knew about Web3 wallets.
                    </Typography>
                    <Typography variant="body2" sx={descriptionStyle}>
                      Convert your social media accounts into gateways to the
                      Web3 world.
                    </Typography>
                    <Box sx={contactLinksContainerStyle}>
                      <Tooltip title="Twitter" placement="left">
                        <a
                          href="https://twitter.com/raptures_tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contactLink"
                        >
                          <IconButton color="inherit" sx={{ paddingLeft: 0 }}>
                            <TwitterIcon />
                          </IconButton>
                        </a>
                      </Tooltip>
                      <Tooltip title="Email" placement="top">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=pratham.oza@raptures.xyz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contactLink"
                        >
                          <IconButton color="inherit">
                            <EmailIcon />
                          </IconButton>
                        </a>
                      </Tooltip>
                      <Tooltip title="Telegram" placement="right">
                        <a
                          href="https://web.telegram.org/k/#@maddyinadream"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contactLink"
                        >
                          <IconButton color="inherit">
                            <TelegramIcon />
                          </IconButton>
                        </a>
                      </Tooltip>
                    </Box>
                    <Box sx={buttonsContainerStyle}>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<NotStartedOutlinedIcon />}
                        sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
                        component="a"
                        href="https://drive.google.com/file/d/1MUHQ7fuVKcQ17GWQjyj2ABoE-wxFWDqP/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        User Interface
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<NotStartedOutlinedIcon />}
                        sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
                        component="a"
                        href="https://drive.google.com/file/d/1-GFiwiokqmwAUp40diJcqrBBaueNhj8Q/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Daap Integration
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={7}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <div className="imageDiv">
                        <img src={imgSrc} alt="homeImage" />
                      </div>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          {/* Footer */}
          <Box
            sx={{
              background:
                "var(--glass, radial-gradient(151.92% 127.02% at 15.32% 20%, rgba(159, 217, 255, 0.04) 100%, rgba(70, 144, 212, 0.00) 10%))",
              backdropFilter: "blur(100px)",
              padding: "1rem",
              color: "white",
            }}
          >
            <Container maxWidth="lg">
              <Tooltip title="raptures.company@gmail.com" arrow>
                <Typography variant="body2" align="center">
                  &copy; 2023 Raptures. Made with love.
                </Typography>
              </Tooltip>
            </Container>
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
};

export default HomeScreen;
