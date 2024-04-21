import {
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

export default function RegisterModal({ body, handleChange }) {
  const gender = ["Муж", "Жен"];
  return (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Имя"
          variant="standard"
          name="name"
          type="text"
          required
          value={body.name}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Пол</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={body.gender}
            label="Пол"
            name="gender"
            required
            onChange={handleChange}
          >
            <MenuItem value={gender[0]}>Муж</MenuItem>
            <MenuItem value={gender[1]}>Жен</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="filled"
          type="date"
          name="date_birth"
          required
          value={body.date_birth}
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </Grid>
    </>
  );
}
