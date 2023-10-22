import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";

const ChannelCard = ({ channel, id, subscriber, marginTop,alignSelf }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "310px"},
        height:"326px",
        border: "none",
        borderRadius: "0",
        boxShadow: "none ",
        p: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop,
        alignSelf,
        zIndex: "100",
      }}
    >
      <Link to={`/channel/${id?.channelId}`}>
        <CardContent
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={channel?.thumbnails?.medium?.url}
            alt={channel?.title}
            sx={{
              height: "180px",
              width: "180px",
              borderRadius: "50%",
              p: "10px",
            }}
          />
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              p: "5px",
            }}
          >
            {channel?.channelTitle || channel?.title}
            <CheckCircle
              sx={{ fontSize: "13px", ml: "5px", alignSelf: "center" }}
            />
          </Typography>
          <Typography sx={{color:"#AFAFAF", fontSize:"12px"}}>
          {subscriber && parseInt(subscriber).toLocaleString()} Subscribers
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
