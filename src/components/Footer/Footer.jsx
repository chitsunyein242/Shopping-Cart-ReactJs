import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1976d3',
        py: 3,
      }}
      elevation={3}
    >
      <Typography variant="h6" sx={{ color: "white" }}>
        Footer Text Here
      </Typography>
    </Paper>
  );
}
