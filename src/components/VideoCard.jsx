import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { VideoContext } from "../context/VideoContext";

const VideoCard = ({ video, id }) => {
  const {dispatch} = useContext(VideoContext);

  const setVideo = (e) => {

    dispatch({type:"VideoSelected", payload:video})
  }

  return (
    <Card
      sx={{
        width: { sx: "100%", md: "300px" },
        border: "none",
        borderRadius: "0",
        boxShadow: "none "
      }}
    >
      <CardActionArea>
        <Link to={id && `/video/${id.videoId}`} onClick={setVideo}>
          <CardMedia
            component="img"
            image={video?.thumbnails?.medium?.url}
            alt={video.title}
            sx={{ height: "auto", width: { sx: "100%", md: "300px" } }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px" }}>
          <Link to={id && `/video/${id.videoId}`} onClick={setVideo}>
            <Typography
              varient="subtitle1"
              color="white"
              sx={{ p: "10", fontSize: "16px", mb: "10px",fontWeight:"bold" }}
            >
              {video.title.slice(0, 70)}
            </Typography>
          </Link>
          <Link to={id && `/channel/${video.channelId}`}>
            <Typography
              variant="subtitle4"
              sx={{
                p: "10",
                color: "#AFAFAF",
                fontSize: "12px",
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
