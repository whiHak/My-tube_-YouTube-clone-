import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { VideoContext } from "../context/VideoContext";
import { CheckCircle } from "@mui/icons-material";

const VideoDetail = () => {
  // const [videoDetails, setVideoDetails] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  const videoDetails = useContext(VideoContext);

  useEffect(() => {
    try {
      fetchAPI(
        `search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`
      ).then((data) => {
        setRelatedVideos(data?.items);
      });
    } catch (error) {
      //Handle Error
    }
  }, [id]);
  const {
    data: { snippet },
  } = videoDetails;
  console.log(snippet);
  return (
    <Box minHeight="95vh" width="100vw">
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ alignItems: " md: center" }}
      >
        <Box flex={1}>
          <Box sx={{ width: "100%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Box m={5}>
              <Typography
                varient="h5"
                color="white"
                sx={{
                  p: "10",
                  fontSize: "18px",
                  mb: "10px",
                  fontWeight: "bold",
                }}
              >
                {snippet?.title.slice(0, 70)}
              </Typography>
              <Link to={id && `/channel/${snippet?.channelId}`}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    p: "10",
                    color: "#AFAFAF",
                    fontSize: "14px",
                    alignItems: "center",
                  }}
                >
                  {snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "13px", ml: "5px", alignSelf: "center" }}
                  />
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
        {/* {console.log(relatedVideos)} */}
        <Videos videos={relatedVideos} direction="column" />
      </Stack>
    </Box>
  );
};

export default VideoDetail;
