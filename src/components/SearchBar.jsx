import React from "react";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: "200px",
        pl: "10px",
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
        height:"35px",
        display:"flex",
        alignItems:"center",
        width: "30%"
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{ border: "none", outline: "none", borderRadius: "20px", width:"100%" }}
        onChange={()=>{}}
      />
      <IconButton>
        <Search type="submit" sx={{ p:"10px", color:"#00A9EC"}}/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
