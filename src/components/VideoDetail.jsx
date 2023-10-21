import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import ReactPlayer from "react-player";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then(
      (data) => setVideoDetails(data.items[0])
      );
    fetchAPI(`search?part=id%2Csnippet&type=video&relatedToVideoId=${id}`).then(
      (data) => {
        // setRelatedVideos(data?.items);
        // console.log(data)
      }
      );
    }, [id]);
    console.log(videoDetails)
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
            <Typography variant={{xs:"subtitle1", md:"h5"}} p={2} color="#fff">
              {videoDetails?.snippet?.title}
            </Typography>
          </Box>
        </Box>
        {/* {console.log(relatedVideos)} */}
        {/* <Videos videos={relatedVideos} direction="column" /> */}
      </Stack>
    </Box>
  );
};

export default VideoDetail;
