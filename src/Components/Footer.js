import { Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <Container id="footerContainer">
        <Link to={"/"} className="footerLink">
          <Typography variant="subtitle1" conponent="h5">
            Information
          </Typography>{" "}
        </Link>
        <Link to={"/"} className="footerLink">
          {" "}
          <Typography variant="subtitle1" conponent="h5">
            Advertise
          </Typography>
        </Link>
        <Link to={"/"} className="footerLink">
          <Typography variant="subtitle1" conponent="h5">
            Contact Us
          </Typography>{" "}
        </Link>
        <Link to={"/"} className="footerLink">
          {" "}
          <Typography variant="subtitle1" conponent="h5">
            GDPR
          </Typography>
        </Link>
        <Link to={"/"} className="footerLink">
          {" "}
          <Typography variant="subtitle1" conponent="h5">
            Social Media
          </Typography>
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
