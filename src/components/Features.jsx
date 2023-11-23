import React from "react";
import { Card, CardContent, Typography, Grid, styled } from "@mui/material";

import Icon1 from "@mui/icons-material/AccountBalance";
import Icon2 from "@mui/icons-material/Psychology";
import Icon3 from "@mui/icons-material/CurrencyBitcoin";
import Icon4 from "@mui/icons-material/AssignmentInd";
import Icon5 from "@mui/icons-material/Security";

const features = [
  {
    icon: <Icon1 />,
    title: "Completely Self-Custodial",
  },
  {
    icon: <Icon2 />,
    title: "Intelligent Token Management",
  },
  {
    icon: <Icon3 />,
    title: "Automatic Chain Handling",
  },
  {
    icon: <Icon4 />,
    title: "Social Profile Wallet Integration",
  },
  {
    icon: <Icon5 />,
    title: "Secure Social Login & Key Management",
  },
];

const CardContainer = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100px",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  padding: "4rem 0rem 2rem 0rem",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.56)",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const IconWrapper = styled("div")({
  fontSize: "large",
  marginBottom: "2rem",
  color: "#d8d8d8",
});

const FeaturesPage = () => {
  return (
    <div style={{ marginTop: "8rem" }}>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        paddingRight={10}
        paddingLeft={10}
      >
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} paddingBottom={2}>
            <CardContainer>
              <CardContent>
                <IconWrapper style={{ transform: "scale(2.5)" }}>
                  {feature.icon}
                </IconWrapper>
                <Typography
                  variant="h6"
                  component="div"
                  color="#e7e7e7"
                  padding={0}
                >
                  {feature.title}
                </Typography>
              </CardContent>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturesPage;
