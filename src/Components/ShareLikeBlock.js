import React from "react";
import { useState } from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Avatar,
  Stack,
} from "@mui/material";
import facebookIcon from "../media/facebook-3.svg";
import gmailIcon from "../media/gmail-icon.svg";
import igIcon from "../media/instagram-2-1.svg";
import whatsupIcon from "../media/whatsapp-icon.svg";

export default function ShareLikeBlock() {
  const [open, setOpen] = useState(false);
  const [liked, setLike] = useState(false);

  const handleLike = () => {
    setLike(!liked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Share this article with your friends!"}
          </DialogTitle>
          <DialogContent>
            <Stack direction="row" spacing={4}>
              <Avatar alt="Remy Sharp" src={facebookIcon} />
              <Avatar alt="Remy Sharp" src={gmailIcon} />
              <Avatar alt="Remy Sharp" src={igIcon} />
              <Avatar alt="Remy Sharp" src={whatsupIcon} />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>close</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <IconButton area-lable="share button" onClick={handleClickOpen}>
          <ShareOutlinedIcon color="primary" sx={{ mr: 1 }} />
        </IconButton>
        <IconButton area-lable="like button" onClick={handleLike}>
          {liked ? (
            <ThumbUpIcon color="primary" />
          ) : (
            <ThumbUpOutlinedIcon color="primary" />
          )}
        </IconButton>
      </div>
    </>
  );
}
