import "./App.css";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const startSession = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/recomm");
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box component="main" sx={{ textAlign: "center" }}>
        <Typography variant="h4">
          USER EXPERIENCE IN CLOTHING FASHION E-COMMERCE - EVALUATION EXPERIMENT
        </Typography>
        <Divider sx={{ margin: 2 }} />
        <Typography>
          You are kindly requested to help us evaluate scenarios of Recommender
          Systems' applications to Fashion E-commerce. For that, we designed an
          evaluation experiment in which you try to select a skirt you like and
          would possibly buy from a fashion e-commerce site in three different
          scenarios. The experiment should take you less than <b>15 minutes</b>.
          Results will be kept anonymous. Thank you for your contribution.
          <b>
            Your goal is to find a striped mid-size skirt that you like and
            would "buy".
          </b>
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", marginTop: 2, gap: 2}}>
          <Button variant="contained" component={Link} to={"/instructions"}>
            Instructions
          </Button>
          <Button variant="contained" onClick={startSession}>
            Start Experiment
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
