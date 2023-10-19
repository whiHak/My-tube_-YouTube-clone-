import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    e.code === "Enter" && navigate(`/search/${query}`);
  };
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
        height: "35px",
        display: "flex",
        alignItems: "center",
        width: "30%",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{
          border: "none",
          outline: "none",
          borderRadius: "20px",
          width: "100%",
        }}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <Link to={`/search/${query}`}>
        <IconButton>
          <Search type="submit" sx={{ p: "10px", color: "#00A9EC" }} />
        </IconButton>
      </Link>
    </Paper>
  );
};

export default SearchBar;
