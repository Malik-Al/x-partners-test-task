import { useState } from "react";
import { Box, Button } from "@mui/material";
import { Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
// import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function UpdateModal() {
  const users = useSelector((state) => state.users.users);
  const user = users.filter((el) => el._id === localStorage.getItem("id"))[0];
  console.log("user", user);

  let navigate = useNavigate();
  const [open, setOpen] = useState(true);

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    setOpen(false);
    navigate("/people");
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        {/* <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Имя: {user.name}</h2>
          <Typography id="parent-modal-title">Пароль: {user.password}</Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box> */}

        <Box sx={style}>
          <form onSubmit>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  Редактирование профиля
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Имя"
                  variant="standard"
                  name="name"
                  type="text"
                  required
                  value
                  onChange
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Пароль"
                  variant="standard"
                  type="password"
                  name="password"
                  required
                  value
                  onChange
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Фото профиля"
                  variant="standard"
                  type="file"
                  name="img"
                  required
                  onChange
                />
              </Grid>
            </Grid>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Grid sx={{ paddingTop: "5%" }}>
                <Button
                  variant="contained"
                  color="warning"
                  type="submit"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Отправить
                </Button>
              </Grid>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
