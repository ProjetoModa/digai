import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChatbotService from "../services/chatbotService";

export default function InterBC() {
  let uuid = useRef<string | null>(null);
  const navigate = useNavigate();

  const startPartC = async () => {
    const session = await ChatbotService.navigate(uuid.current!, "/part-c");
    localStorage.setItem("state", session.state);
    navigate("/part-c");
  };

  useEffect(() => {
    uuid.current = localStorage.getItem("uuid");
    if (!uuid) {
      navigate("/");
    }
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
          <Typography variant="h4" sx={{color: "#ffffff"}}>We are almost finished</Typography>
          <Divider sx={{ margin: 2 }} />
          <Typography sx={{color: "#fafafa"}}>
             Part C is rather quick and there will be no
            more questionnaires. There you will find the same
            experiment as before, but you must use the chatbot to get recommendations.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              gap: 2,
            }}
          >
            <Button variant="contained" onClick={startPartC}>
              Start Part C
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
