import * as React from "react";
import config from "../../config.json";
import { CardHeader, Avatar, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function CardUser({ user }) {
  let navigate = useNavigate();
  const { img, name, date_birth } = user;

  const filterDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };
  return (
    <div class="user-card" onClick={() => navigate('/account')}>
      <CardHeader
        avatar={<Avatar src={`${config["base-url"] + img}`} />}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Дата рожд: {filterDate(date_birth)}
        </Typography>
      </CardContent>
    </div>
  );
}
