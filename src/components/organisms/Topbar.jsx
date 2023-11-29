import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#272525" }}>
      <AppBar sx={{ backgroundColor: "#272525" }}>
        <Toolbar>
          <img
            src="https://movie-search-front-end-tyrohan.vercel.app/static/media/Group%209@2x.9cd1652d5c23eb9419d3.png"
            alt="logo"
            width={125}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}></Typography>
          <Button onClick={handleLogout} color="inherit">
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;
