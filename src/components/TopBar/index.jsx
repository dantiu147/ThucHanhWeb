import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {
  const location = useLocation();
  const path = location.pathname; // Ví dụ: "/users/602" hoặc "/photos/602"
  
  let contextText = "Welcome";

  // Logic để xác định nội dung bên phải TopBar
  if (path.includes("/users/")) {
    const userId = path.split("/").pop();
    const user = models.userModel(userId);
    if (user) contextText = `Details of ${user.first_name} ${user.last_name}`;
  } else if (path.includes("/photos/")) {
    const userId = path.split("/").pop();
    const user = models.userModel(userId);
    if (user) contextText = `Photos of ${user.first_name} ${user.last_name}`;
  }
    return (
    <AppBar position="absolute">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Bên trái: Tên của bạn */}
        <Typography variant="h6" color="inherit">
          Nguyễn Tiến Đàn
        </Typography>

        {/* Bên phải: Ngữ cảnh của App */}
        <Typography variant="h6" color="inherit">
          {contextText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
