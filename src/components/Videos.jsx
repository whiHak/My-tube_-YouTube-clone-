import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { VideoCard, ChannelCard } from "./component";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction= { direction || "row"} 
      alignItems="center"
      flexDirection="start"
      flexWrap="wrap"
      gap={3}
      sx={{  display:"flex", justifyContent:"center", alignItems:"center",margin:{sx:0, md:2 } }}
    >
      {console.log(videos)}
      {videos?.map((items, indx) => (
        <Box key={indx}>
          {/* {console.log(items.snippet.thumbnails.medium.url)} */}
          {items?.id?.channelId && (
            <ChannelCard channel={items.snippet} id={items.id} alignSelf="center" />
          )}
          {items?.id?.videoId && (
            <VideoCard video={items.snippet} id={items.id} />
          )}
        </Box>
      ))}
    </Stack>
  );
};
export default Videos;
