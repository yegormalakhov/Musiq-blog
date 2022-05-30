import { Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <Container id="footerContainer" gutterBottom>
        <Link to={"/"} className="footerLink">
          <Typography variant="subtitle1" conponent="h5" gutterBottom>
            Information
          </Typography>{" "}
        </Link>
        <Link to={"/"} className="footerLink">
          {" "}
          <Typography variant="subtitle1" conponent="h5" gutterBottom>
            Advertise
          </Typography>
        </Link>
        <Link to={"/"} className="footerLink">
          <Typography variant="subtitle1" conponent="h5" gutterBottom>
            Contact Us
          </Typography>{" "}
        </Link>
        <Link to={"/"} className="footerLink">
          {" "}
          <Typography variant="subtitle1" conponent="h5" gutterBottom>
            GDPR
          </Typography>
        </Link>
        <Link to={"/"} className="footerLink">
          {" "}
          <Typography variant="subtitle1" conponent="h5" gutterBottom>
            Social Media
          </Typography>
        </Link>
      </Container>

      {/* <h5>Information</h5>
      <h5>Advertise</h5>
      <h5>Contact Us</h5>
      <h5>GDPR</h5>

      <h5>Social Media</h5> */}
    </footer>
  );
};

export default Footer;
