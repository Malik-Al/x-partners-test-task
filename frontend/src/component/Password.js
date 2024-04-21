import { Grid, InputAdornment, IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Password({
  password,
  showPassword,
  handleChange,
  handleClickShowPassword,
  handleMouseDownPassword,
}) {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Пароль"
          variant="standard"
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </>
  );
}
