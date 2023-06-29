import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function End() {
  const { t } = useTranslation();
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
          <Typography variant="h4" sx={{ color: "#ffffff" }}>
            {t("end.title")}
          </Typography>
          <Divider sx={{ margin: 2 }} />
          <Typography sx={{ color: "#fafafa" }}>{t("end.p1")}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              gap: 2,
            }}
          >
            <Button variant="contained" component={Link} to={"/"}>
              {t("end.restart")}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
