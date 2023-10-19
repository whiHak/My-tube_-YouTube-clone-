import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import Videos from "./Videos";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  console.log(searchTerm);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        //Handle error
      });
  }, []);
  return (
    <Stack sx={{ flexDirection:"column", alignItems:"center"}}>
      <Typography variant="h4" sx={{ mb: 2, color: "white", height:"max-content"}}>
        Search results for{" "}
        <span style={{ color: "#00A9EC", fontWeight: "bold" ,height:"max-content"}}>
          "{searchTerm}"
        </span>
      </Typography>
      <Box sx={{ p: 2, overflowY: "auto", height: "90vh", flex: 2 }}>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default SearchFeed;
