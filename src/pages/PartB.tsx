import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PartB() {
  return (
    <Box
      className="background"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Box component="main" sx={{ textAlign: "center" }}>
          <Typography variant="h4">
          END OF PART A
          </Typography>
          <Divider sx={{ margin: 2 }} />
          <Typography>
          Thank you for your time. Please go to Part B of the experiment by clicking on the button below. There you will find the same experiment as before, but with a chatbot. Feel free to use it.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              gap: 2,
            }}
          >
            <Button variant="contained" component={Link} to={"/chat"}>
              Start Part B
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
