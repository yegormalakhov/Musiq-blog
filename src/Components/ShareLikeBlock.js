import React from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Container, IconButton } from "@mui/material";

export default function ShareLikeBlock() {
  return (
    <div>
      <IconButton area-lable="share button">
        <ShareOutlinedIcon color="primary" sx={{ mr: 1 }} />
      </IconButton>
      <IconButton area-lable="like button">
        <ThumbUpOutlinedIcon color="primary" />
      </IconButton>
    </div>
  );
}
