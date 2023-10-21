import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAPI } from "../utils/fetchAPI";
import { Sidebar, Videos } from "./component";

const Feed = () => {
  const [selectedCategory, setCat] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))

      .catch((err) => {
        console.error(err);
      });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setCat={setCat} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: "1.5", color: "#fff" }}
        >
          copyright &copy; 2023 myTube
        </Typography>
      </Box>
      <Box sx={{ p: 2, overflowY: "auto", minHeight: "90vh", flex: 2 }}>
        <Typography variant="h4" sx={{ mb: 2, color: "white" }}>
          {selectedCategory}
          <span style={{ color: "#00A9EC", fontWeight: "bold" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
