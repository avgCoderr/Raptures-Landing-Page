import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
} from "@mui/material";

import rishabhImg from "../assets/rishabh.jpg";
import prathamImg from "../assets/pratham.jpg";
import madhavImg from "../assets/madhav.jpg";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import hdfc from "../assets/hdfc.svg";
import tata from "../assets/tata.svg";
import dcm from "../assets/dcm.svg";
import era from "../assets/erasm.svg";
import searce from "../assets/searce.svg";
import sing from "../assets/singularity.svg";
import upt from "../assets/uptrain.svg";
import leap from "../assets/leap.svg";
import map from "../assets/mapleblock.svg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rishabh Barnwal",
      description: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/rishabh-barnwal/",
      github: "https://github.com/avgCoderr",
      imageUrl: rishabhImg,
      icons: [
        <img
          style={{
            filter: "grayscale(100%)",
            height: "30px",
            paddingRight: "0.4rem",
            paddingLeft: "0.4rem",
          }}
          src={hdfc}
          alt="hdfc"
        />,
        <img
          style={{
            filter: "brightness(0) invert(1)",
            height: "30px",
            paddingRight: "0.4rem",
            paddingLeft: "0.4rem",
          }}
          src={dcm}
          alt="dcm"
        />,
        <img
          style={{
            filter: "grayscale(100%)",
            height: "30px",
            paddingRight: "0.4rem",
            paddingLeft: "0.4rem",
          }}
          src={tata}
          alt="tata"
        />,
        <img
          style={{
            filter: "brightness(0) invert(1)",
            height: "20px",
            paddingRight: "0.4rem",
            paddingLeft: "0.4rem",
          }}
          src={era}
          alt="era"
        />,
      ],
    },
    {
      id: 2,
      name: "Madhav Madhusoodanan",
      description: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/madhav-madhusoodanan/",
      github: "https://github.com/madhav-madhusoodanan",
      imageUrl: madhavImg,
      icons: [
        <img
          style={{
            filter: "grayscale(100%)",
            height: "16px",
            padding: "0.3rem",
          }}
          src={leap}
          alt="leap"
        />,
        <img
          style={{
            filter: "grayscale(100%)",
            height: "16px",
            padding: "0.3rem",
          }}
          src={sing}
          alt="sing"
        />,
        <img
          style={{
            filter: "grayscale(100%)",
            height: "16px",
            padding: "0.3rem",
          }}
          src={map}
          alt="map"
        />,
      ],
    },
    {
      id: 3,
      name: "Pratham Oza",
      description: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/pratham-oza-9637ba201/",
      github: "",
      imageUrl: prathamImg,
      icons: [
        <img
          style={{
            filter: "grayscale(100%)",
            height: "20px",
            padding: "0.2rem",
          }}
          src={searce}
          alt="searce"
        />,
        <img
          style={{
            filter: "grayscale(100%)",
            height: "20px",
            padding: "0.2rem",
          }}
          src={upt}
          alt="upt"
        />,
      ],
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          alignContent: "center",
          height: "100%",
        }}
      >
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(255, 255, 255, 0.53)",
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.73)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                image={member.imageUrl}
                alt={member.name}
                style={{
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                }}
              >
                <Tooltip title="LinkedIn">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactLink"
                  >
                    <LinkedInIcon
                      style={{
                        fontSize: 30,
                        color: "#0077b5",
                        margin: "0.2rem",
                      }}
                    />
                  </a>
                </Tooltip>
                <Tooltip title="Github">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactLink"
                  >
                    <GitHubIcon
                      style={{
                        fontSize: 30,
                        color: "#fff",
                        margin: "0.2rem",
                      }}
                    />
                  </a>
                </Tooltip>
              </div>
            </div>
            <CardContent
              style={{
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" component="div" paddingBottom={1}>
                {member.name}
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                {member.icons.map((icon, index) => (
                  <div style={{ padding: "0.2rem" }} key={index}>
                    {icon}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;
