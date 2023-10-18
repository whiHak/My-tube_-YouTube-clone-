import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video, id }) => {
  return (
    <Card
      sx={{
        width: { md: "300px", xs: "100%" },
        border: "none",
        borderRadius: "0",
        boxShadow: "none ",
      }}
    >
      <CardActionArea>
        <Link to={id && `/video/${id}`}>
          <CardMedia
            component="img"
            image={video?.thumbnails?.medium?.url}
            alt={video.title}
            sx={{ height: "auto", width: { md: "300px", xs: "100%" } }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px" }}>
          <Link to={id && `/video/${id}`}>
            <Typography
              varient="subtitle1"
              color="white"
              sx={{ p: "10", fontSize: "16px", mb: "10px" }}
            >
              {video.title}
            </Typography>
          </Link>
          <Link to={id && `/channel/${video.channelId}`}>
            <Typography
              variant="subtitle4"
              sx={{
                p: "10",
                color: "#AFAFAF",
                fontSize: "15px",
                alignItems: "center",
              }}
            >
              {video.channelTitle}
              <CheckCircle
                sx={{ fontSize: "13px", ml: "5px", alignSelf: "center" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;