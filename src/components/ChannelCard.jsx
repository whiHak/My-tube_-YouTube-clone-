import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";

const ChannelCard = ({ channel, id }) => {
  return (
    <Box
      sx={{
        width: { md: "310px", xs: "100%" },
        border: "none",
        borderRadius: "0",
        boxShadow: "none ",
        p: 0,
      }}
    >
      <Link to={`/channel/${id.channelId}`}>
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
            alt={channel.title}
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
            {channel.channelTitle}
            <CheckCircle
              sx={{ fontSize: "13px", ml: "5px", alignSelf: "center" }}
            />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
