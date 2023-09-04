import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  createTheme,
  ThemeProvider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import walletCreation from "../assets/walletCreation.svg";
import walletAuth from "../assets/walletAuth.svg";

const theme = createTheme({
  typography: {
    fontFamily: "'Manrope', sans-serif",
  },
});

const Features = () => {
  const currentTheme = useTheme();
  const isMobileView = useMediaQuery(currentTheme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: 12, width: isMobileView ? null : "40%" }}>
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(5px)",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            padding: isMobileView ? "0.8rem" : "1rem",
            borderRadius: "1rem",
          }}
        >
          <Grid container spacing={isMobileView ? 0 : 2}>
            <Grid item xs={12} md={6}>
              <img
                src={walletCreation}
                alt="Wallet Creation"
                style={{ width: "100%", opacity: 0.8 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent
                sx={{
                  color: "#cecece",
                  textAlign: isMobileView ? "center" : null,
                }}
              >
                <Typography
                  variant={isMobileView ? "h6" : "h4"}
                  component="div"
                  sx={{ marginBottom: isMobileView ? "0.3rem" : "1rem" }}
                >
                  new wallet creation
                </Typography>
                <Typography variant={isMobileView ? "body2" : "body1"}>
                  1. Verify your login on Discord
                  <br />
                  2. Use your unique Discord ID
                  <br />
                  3. Create a wallet
                  <br />
                  4. Integrate the wallet with the Bot
                  <br />
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Features;
