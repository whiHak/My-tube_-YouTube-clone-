import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { VideoCard, ChannelCard } from "./component";

const Videos = ({videos}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      display="flex"
      flexDirection="start"
      flexWrap="wrap"
      justifyContent="start"
      gap={3}
    >
    {console.log(videos)}
      {videos.map((items, indx) =>(
        <Box key={indx}>
        {/* {console.log(items.snippet.thumbnails.medium.url)} */}
          {items?.id?.channelId && <ChannelCard channel = {items.snippet} id={items.id}/>}
          {items?.id?.videoId && <VideoCard video = {items.snippet} id={items.id}/>}
        </Box>
      ))}
    </Stack>
  );
};
export default Videos;
