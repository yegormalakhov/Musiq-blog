import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <Button variant="outlined" onClick={() => navigate(-1)}>
      Go Back
    </Button>
  );
};

export default GoBack;
