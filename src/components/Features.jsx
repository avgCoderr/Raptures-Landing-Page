import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

import walletCreation from "../assets/walletCreation.svg";
import walletAuth from "../assets/walletAuth.svg";

const cardStyle = {
  borderRadius: "10px",
  background:
    "var(--glass, radial-gradient(151.92% 127.02% at 15.32% 20%, rgba(159, 217, 255, 0.04) 100%, rgba(70, 144, 212, 0.00) 10%))",
  backdropFilter: "blur(100px)",
  color: "white",
  padding: "1rem 4rem 1rem 4rem",
  margin: "2rem",
  width: "30%",
};

const cardContainerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "center",
};

const logoStyle = { width: "95%" };

const Features = () => {
  return (
    <Box
      sx={{
        margin: "3rem 5rem 0rem 5rem",
      }}
    >
      <Box sx={cardContainerStyle}>
        <Card sx={cardStyle}>
          <CardContent>
            <img src={walletCreation} alt="walletCreation" style={logoStyle} />
            <Typography variant="body2" margin={2}>
              Content for Card 1 goes here.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardContent>
            <img src={walletAuth} alt="walletAuth" style={logoStyle} />
            <Typography variant="body2" margin={2}>
              Content for Card 2 goes here.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardContent>
            <img src={walletCreation} alt="walletCreation" style={logoStyle} />
            <Typography variant="body2" margin={2}>
              Content for Card 3 goes here.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Features;
