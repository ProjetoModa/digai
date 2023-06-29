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
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
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
        title: t("dialog.consent.title"),
        description: t("dialog.consent.description"),
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
              {t("title")}
            </Typography>
            <img
              src="https://static.cct.ufcg.edu.br/logo/UFAL.svg"
              height={150}
            />
          </Box>
          <Divider sx={{ margin: 2 }} />
          <Typography variant="h5" sx={{ color: "#ffffff" }}>
            {t("home.title1")}
          </Typography>
          <Typography sx={{ color: "#fafafa" }}>{t("home.p1")}</Typography>
          <Typography variant="h5" sx={{ color: "#ffffff", mt: 2 }}>
            {t("home.title2")}
          </Typography>
          <Typography sx={{ color: "#fafafa" }}>{t("home.p2")}</Typography>

          <Typography variant="h5" sx={{ color: "#ffffff", mt: 2 }}>
            {t("home.title3")}
          </Typography>
          <Typography sx={{ color: "#fafafa" }}>{t("home.p3")}</Typography>

          <Typography variant="h5" sx={{ color: "#ffffff", mt: 2 }}>
            {t("home.title4")}
          </Typography>
          <Typography sx={{ color: "#fafafa" }}>{t("home.p4")}</Typography>
          <Typography sx={{ color: "#fafafa" }}>{t("home.p5")}</Typography>

          <FormControlLabel
            sx={{ margin: 2, color: "#ffffff" }}
            control={<Checkbox checked={consent} onChange={handleChange} />}
            label={t("consent")}
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
            <Button
              variant="contained"
              component={Link}
              to={"/instructions"}
              target="_blank"
            >
              {t("instructions.title")}
            </Button>
            <Button variant="contained" onClick={startSession}>
              {t("start")}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
