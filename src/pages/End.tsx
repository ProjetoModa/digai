import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function End() {
  useEffect(() => {
    localStorage.clear();
  }, []);
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
          <Typography variant="h4" sx={{color: "#ffffff"}}>Thank You</Typography>
          <Divider sx={{ margin: 2 }} />
          <Typography sx={{color: "#fafafa"}}>
            Thank you for your time. You can contact me at
            andredantas@copin.ufcg.edu.br if you like to receive a copy of the
            published results.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              gap: 2,
            }}
          >
            <Button variant="contained" component={Link} to={"/"}>
              Repeate the Experiment for Another Person
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
