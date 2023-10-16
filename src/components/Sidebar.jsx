import { Box, Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";
const Sidebar = ({selectedCategory, setCat}) => {

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((obj) => (
        <button
          className="category-btn"
          style={{
            background: selectedCategory === obj.name && "#00A9EC",
            color: "#fff",
          }}
          key={obj.name}
          onClick={() => (setCat(obj.name))}
        >
          <span
            style={{
              color: selectedCategory === obj.name ? "white" : "#00A9EC",
              marginRight: "15px",
            }}
          >
            {obj.icon}
          </span>
          <span
            style={{ opacity: selectedCategory === obj.name ? "1" : "0.7" }}
          >
            {obj.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
