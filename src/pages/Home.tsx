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
        <Box component="main" sx={{ textAlign: "center", padding: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img
              src="https://static.cct.ufcg.edu.br/logo/UFCG.svg"
              height={150}
            />
            <Typography variant="h4" sx={{ color: "#ffffff" }}>
              USER EXPERIENCE IN CLOTHING FASHION E-COMMERCE - EVALUATION
              EXPERIMENT
            </Typography>
            <img
              src="https://static.cct.ufcg.edu.br/logo/UFAL.svg"
              height={150}
            />
          </Box>
          <Divider sx={{ margin: 2 }} />
          <Typography variant="h5" sx={{ color: "#ffffff" }}>
            What is the research about?
          </Typography>
          <Typography sx={{ color: "#fafafa" }}>
            I am André Landim, a Computer Science Master’s student at the
            Federal University of Campina Grande (UFCG) in collaboration with
            the Federal University of Alagoas (UFAL) in Brazil. We would like to
            invite you to participate in a study regarding chatbot and
            recommender system for fashion e-commerce. This study was approved
            by the Ethics Committee at UFAL (CAAE 43950621.4.0000.5013).
          </Typography>
          <Typography variant="h5" sx={{ color: "#ffffff", mt: 2 }}>
            What will happen to me if I take part?
          </Typography>
          <Typography sx={{ color: "#fafafa" }}>
            You are kindly requested to help us evaluate scenarios of
            Recommender Systems' applications to Fashion E-commerce. For that,
            we designed an evaluation website in which you try to select a skirt
            you like and would possibly buy from a fashion e-commerce site in
            three different scenarios. The website interactive experiment should
            take you less than 15 minutes to complete (there are 3 parts).
            Results will be kept anonymous. After the experiment, you will be
            asked to complete an anonymous questionnaire which should take you
            another 15 minutes approximately. Thius, altogehter (experiment +
            questionnaire) you might spend at least 30min in this study.
          </Typography>

          <Typography variant="h5" sx={{ color: "#ffffff", mt: 2 }}>
            What is the “evaluation experiment” via website interaction and what
            am I supposed to do?
          </Typography>
          <Typography sx={{ color: "#fafafa" }}>
            In the experiment you will find a list of skirts to choose. No
            personal information will be collected, only your interactions with
            the website via clicks. Your goal is to find a striped mid-size
            skirt that you like and would "buy". To simulate your buying action
            and end the experiment you click on the 🛒 (shopping cart) button.
            The website interaction will take place in three parts. In Part A
            recommendations are made to you without the assistance of a chatbot;
            in Part B, you may use a chatbot after an initial, random set of
            skirt suggestions; and, in Part C you ask the chatbot to make an
            initial set of skirt suggestions. This website interaction will help
            us understand the effectiveness of the chatbot in context.
          </Typography>

          <Typography variant="h5" sx={{ color: "#ffffff", mt: 2 }}>
            What information will be collected?
          </Typography>
          <Typography sx={{ color: "#fafafa" }}>
            The questions in this survey seek to identify various aspects of the
            user's experience, including the quality, accuracy, variety,
            control, and efficiency of the recommendations provided by the
            platform, as well as the overall trust and experience of the user.
            We also collect logs of tool usage, which record each user iteration
            and the timestamp of each action taken. We do not collect any
            personal information, only user analytics. We do not collect any
            information, such as email, that may identify you in any way. Some
            of the survey questions contain textboxes where you will be asked to
            type in your own answers. Please note that in order for this survey
            to be anonymous, you should not include in your answers any
            information from which you, or other people, could be identified.
          </Typography>

          <FormControlLabel
            sx={{ margin: 2, color: "#ffffff" }}
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
