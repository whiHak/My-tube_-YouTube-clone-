import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import { ChannelCard, Videos } from "./component";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    try {
      fetchAPI(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) => {
        setChannelDetail(data.items[0]);
      });
      fetchAPI(`search?part=snippet%2Cid&channelId=${id}`).then((data) => {
        setChannelVideos(data.items);
      });
    } catch (error) {
      //Handle Error
    }

    return () => {};
  }, [id]);
  return (
    <Box
      sx={{
        // height: "95vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box>
        <div
          style={{
            background: " rgb(2,0,36)",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(29,26,135,1) 15%, rgba(0,212,255,1) 100%)",
            height: "250px",
            width: "100vw",
            zIndex: "50",
          }}
        />
        {console.log(channelDetail?.statistics?.subscriberCount)}
        <ChannelCard
          channel={channelDetail?.snippet}
          id={channelDetail?.id}
          subscriber={channelDetail?.statistics?.subscriberCount}
          marginTop="-120px"
        />
        <Box display="flex" alignItems="center">
          <Box sx={{ height: "100%" }} />
          <Videos videos={channelVideos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
