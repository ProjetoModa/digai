import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ChatbotService from "../services/chatbotService";
import AlertDialog from "../components/AlertDialog";

export default function Home() {
  const [consent, giveConsent] = useState<boolean>(false);
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    giveConsent(event.target.checked);
  };
  const startSession = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!consent) {
      setDialog({
        open: true,
        title: "Consent is required.",
        description: "To continue, please check the consent box",
      });
    } else {
      const uuid = uuidv4();
      await ChatbotService.init(uuid);
      const session = await ChatbotService.navigate(uuid, "/part-a");
      localStorage.setItem("uuid", uuid);
      localStorage.setItem("state", session.state);
      navigate("/part-a");
    }
  };
  let uuid: string | null;

  useEffect(() => {
    uuid = localStorage.getItem("uuid");
    if (!uuid) {
      return;
    }
    const state = JSON.parse(localStorage.getItem("state") || "{}");
    if (state && state["page"] !== location.pathname) {
      navigate(state["page"]);
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
          <Box sx={{display: "flex", flexDirection: "row"}}>
            <img
              src="https://static.cct.ufcg.edu.br/logo/UFCG.svg"
              height={150}
            />
            <Typography variant="h4">
              USER EXPERIENCE IN CLOTHING FASHION E-COMMERCE - EVALUATION
              EXPERIMENT
            </Typography>
            <img
              src="https://static.cct.ufcg.edu.br/logo/UFAL.svg"
              height={150}
            />
          </Box>
          <Divider sx={{ margin: 2 }} />
          <Typography>
            You are kindly requested to help us evaluate scenarios of
            Recommender Systems' applications to Fashion E-commerce. For that,
            we designed an evaluation experiment in which you try to select a
            skirt you like and would possibly buy from a fashion e-commerce site
            in three different scenarios. The experiment should take you less
            than <b>15 minutes</b>. Results will be kept anonymous. Thank you
            for your contribution.
            <b>
              Your goal is to find a striped mid-size skirt that you like and
              would "buy".
            </b>
          </Typography>

          <FormControlLabel
            sx={{ margin: 2 }}
            control={<Checkbox checked={consent} onChange={handleChange} />}
            label="By continuing with this survey you confirm that you are at least 18 years of age and that you consent to participate. If you do not consent to participate, please exit this survey or close your browser."
          />

          <AlertDialog
            open={dialog.open}
            title={dialog.title}
            description={dialog.description}
            onClose={() => {
              setDialog({
                open: false,
                title: "",
                description: "",
              });
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              gap: 2,
            }}
          >
            <Button variant="contained" component={Link} to={"/instructions"}>
              Instructions
            </Button>
            <Button variant="contained" onClick={startSession}>
              Start Experiment
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
