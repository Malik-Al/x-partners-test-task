import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import axios from "axios";
import config from "../config.json";
import Password from "./Password";

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
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [open, setOpen] = useState(true);
  const [resError, setResError] = useState("");
  const [body, setFormData] = useState({
    name: "",
    img: null,
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //   const users = useSelector((state) => state.users.users);
  //   const user = users.filter((el) => el._id === localStorage.getItem("id"))[0];
  //   console.log("user", user);

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  const handleChange = (e) => {
    setFormData({
      ...body,
      [e.target.name]:
        e.target.name === "img" ? e.target.files[0] : e.target.value,
    });
  };
  console.log("body", body);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const url = `${config.api.update}/${localStorage.getItem("id")}`;
      const response = await axios.put(url, body, headers);
      console.log("response", response);

      if (response.status === 200) {
        return setIsUpdate(true);
      }
    } catch (error) {
      console.error("handleSubmit Ошибка:", error);
      setResError(error.response.data.message);
    }
  };

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
        <Box sx={style}>
          <form onSubmit>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  Редактирование профиля
                </Typography>
              </Grid>

              {!isUpdate && (
                <Typography sx={{ color: "red" }}>{resError}</Typography>
              )}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Имя"
                  variant="standard"
                  name="name"
                  type="text"
                  value={body.name}
                  onChange={handleChange}
                />
              </Grid>

              <Password
                password={body.password}
                showPassword={showPassword}
                handleChange={handleChange}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
              />

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Фото профиля"
                  variant="standard"
                  type="file"
                  name="img"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Grid sx={{ paddingTop: "5%" }}>
                <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  style={{ marginRight: 198 }}
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={(e) => handleSubmit(e) && navigate("/people")}
                >
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
