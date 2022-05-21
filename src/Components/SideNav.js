import { NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const SideNav = () => {
  return (
    <div className="SideNav">
      <MenuList>
        <MenuItem>
          <NavLink to="">
            <Typography variant="button">Heavy Metal</Typography>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="">
            <Typography variant="button">Metalcore</Typography>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="">
            <Typography variant="button">Prog</Typography>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="">
            <Typography variant="button">Rock</Typography>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="">
            <Typography variant="button">Electronic</Typography>
          </NavLink>
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default SideNav;
