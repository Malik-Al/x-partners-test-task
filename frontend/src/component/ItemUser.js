import * as React from "react";
import config from "../config.json";
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@mui/material";

export default function ItemUser({ user }) {
  const { name, date_birth, img } = user;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          avatar={<Avatar src={`${config["base-url"] + img}`} />}
          title={name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {date_birth}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
