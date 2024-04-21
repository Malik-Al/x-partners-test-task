import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState } from "../store/userStore";
import { CardHeader, Avatar } from "@mui/material";

export default function Navbar({ children }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClearState = () => {
    dispatch(clearState());
    localStorage.clear();
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
          ></IconButton>
          <CardHeader style={{ padding: 0 }} avatar={<Avatar />} />
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
