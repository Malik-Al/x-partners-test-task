import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState } from "../store/userStore";
// import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ children }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClearState = () => {
    dispatch(clearState());
    localStorage.clear()
  };
  return (
    <Box sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="success"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" onClick={(e) => navigate("/account")}>
              Профиль
            </Button>
          </Typography>
          <Button
            color="inherit"
            onClick={(e) => navigate("/") && handleClearState()}
          >
            Выйти
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
