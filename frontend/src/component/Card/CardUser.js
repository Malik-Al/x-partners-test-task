import * as React from "react";
import config from "../../config.json";
import { CardHeader, Avatar, CardContent, Typography } from "@mui/material";
import "./style.css";


export default function CardUser({ user }) {
  const { img, name, date_birth } = user;
  return (
    <div class="user-card">
      <CardHeader
        avatar={<Avatar src={`${config["base-url"] + img}`} />}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Дата рождения: {date_birth}
        </Typography>
      </CardContent>
    </div>
  );
}
