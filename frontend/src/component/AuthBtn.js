import Typography from "@mui/material/Typography";

export default function AuthBtn({ action, event }) {
  return (
    <>
      <Typography
        sx={{ paddingTop: "5%", textDecoration: "underline" }}
        id="modal-modal-title"
        variant="h6"
        component="h2"
        onClick={(e) => event(e)}
      >
        {action}
      </Typography>
    </>
  );
}
