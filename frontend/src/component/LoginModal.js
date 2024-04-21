import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Grid } from "@mui/material";
import RegisterModal from "./RegisterModal";
import config from "../config.json";
import AuthBtn from "./AuthBtn";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export default function LoginModal({ isModal }) {
  let navigate = useNavigate();
  const [auth, setAuth] = useState({
    register: "Регистрация",
    login: "Авторизация",
  });
  const [isAuth, setIsAuth] = useState(false);
  const [open, setOpen] = useState(isModal);
  const [resError, setResError] = useState("");
  const [body, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    date_birth: "",
    img: null,
  });

  const changeAuth = (e) => {
    e.preventDefault();
    setIsAuth(true);
    setAuth({ register: "Авторизация", login: "Регистрация" });
  };

  const changeAuthRevers = (e) => {
    e.preventDefault();
    setIsAuth(false);
    setAuth({ register: "Регистрация", login: "Авторизация" });
  };

  const handleChange = (e) => {
    setFormData({
      ...body,
      [e.target.name]:
        e.target.name === "img" ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      if (isAuth) {
        const url = config["api-register"];
        const response = await axios.post(url, body, headers);
        if (response.status === 200)
          localStorage.setItem("id", response.data.data.id);
        return navigate("/people") && setOpen(false);
      } else {
        const url = config["api-login"];
        const response = await axios.post(url, body);
        if (response.status === 200)
          localStorage.setItem("id", response.data.data.id);
        return navigate("/people") && setOpen(false);
      }
    } catch (error) {
      console.error("handleSubmit Ошибка:", error);
      setResError(error.response.data.message);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  {auth.login}
                </Typography>
              </Grid>
              {resError.length > 2 && (
                <Typography sx={{ color: "red" }}>{resError}</Typography>
              )}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="standard"
                  name="email"
                  required
                  value={body.email}
                  onChange={handleChange}
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
                  value={body.password}
                  onChange={handleChange}
                />
              </Grid>

              {isAuth && (
                <RegisterModal body={body} handleChange={handleChange} />
              )}
            </Grid>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {!isAuth && <AuthBtn action={auth.register} event={changeAuth} />}
              {isAuth && (
                <AuthBtn action={auth.register} event={changeAuthRevers} />
              )}

              <Grid sx={{ paddingTop: "5%" }}>
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
