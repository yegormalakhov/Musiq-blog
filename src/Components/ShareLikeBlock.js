import React from "react";
import { useState } from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Container, IconButton, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ShareLikeBlock() {
  const [open, setOpen] = React.useState(false);

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
            <DialogContentText id="alert-dialog-description">
              Here should be social media icons with href to websides.
            </DialogContentText>
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
        <IconButton area-lable="like button">
          <ThumbUpOutlinedIcon color="primary" />
        </IconButton>
      </div>
    </>
  );
}
