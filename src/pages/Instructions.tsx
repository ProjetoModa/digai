import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ClothItem from "../components/ClothItem";
import { ShoppingCart } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Instructions() {
  const { t } = useTranslation();
  const items: string[] = [
    "Stretch-Knit_A-Line_Skirt/img_00000019.jpg",
    "Floral_Lace_Mini_Skirt/img_00000039.jpg",
    "M-Slit_Maxi_Skirt/img_00000016.jpg",
    "Pleated_Midi_Skirt/img_00000011.jpg",
    "Tiered_Floral_Maxi_Skirt/img_00000018.jpg",
    "Rose_Print_Skater_Skirt/img_00000002.jpg",
    "Contrast_Mesh_Pencil_Skirt/img_00000019.jpg",
    "Floral_Lace_Twirly_Skirt/img_00000012.jpg",
    "Belted_Polka_Dot_Skirt/img_00000026.jpg",
    "Abstract_Sequined_Skirt/img_00000028.jpg",
    "Lace_Mini_Skirt/img_00000045.jpg",
    "Lace_A-Line_Skirt/img_00000039.jpg",
  ]

  return (
    <Box component="main">
      <Box component="header" className="header" sx={{ textAlign: "center" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: 4,
            }}
          >
            <img
              src="https://static.cct.ufcg.edu.br/logo/UFCG.svg"
              width={70}
            />
            <Typography variant="h5" sx={{ margin: 4 }}>
                {t("instructions.title")}
            </Typography>
            <img
              src="https://static.cct.ufcg.edu.br/logo/UFAL.svg"
              width={50}
            />
          </Box>
        </Container>
      </Box>
      <Container>
        <Box component="section" sx={{margin: 2}}>
        <Typography variant="h2">{t("instructions.catalog")}</Typography>
        <Typography variant="h4">
          {t("instructions.catalog_p")}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Card>
              <CardHeader title={t("colors.title")} />
              <CardContent>
                <List dense>
                  <ListItem>
                    <ListItemText primary={t("colors.black")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.blue")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.brown")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.beige")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.gray")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.green")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.orange")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.pink")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.purple")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.red")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.white")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("colors.yellow")} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title={t("fabrics.title")} />
              <CardContent>
                <List dense>
                  <ListItem>
                    <ListItemText primary={t("fabrics.denim")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("fabrics.knitted")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("fabrics.laced")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("fabrics.glossy")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("fabrics.general")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("fabrics.velvet")} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title={t("patterns.title")} />
              <CardContent>
                <List dense>
                  <ListItem>
                    <ListItemText primary={t("patterns.animal_print")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("patterns.geometric")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("patterns.camouflage")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("patterns.checked")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("patterns.floral")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("patterns.paisley")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("patterns.plain")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("patterns.polka_dot")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("patterns.striped")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("patterns.tie_dyed")} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title={t("sizes.title")} />
              <CardContent>
                <List dense>
                  <ListItem>
                    <ListItemText primary={t("mini")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("midi")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("maxi")} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title="Shape" />
              <CardContent>
                <List dense>
                  <ListItem>
                    <ListItemText primary={t("shapes.pleated")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("shapes.straight")} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={t("shapes.asymetric")} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h4">
          {t("instructions.catalog_p2")}
        </Typography>
        </Box>
        <Box component="section" sx={{margin: 2}}>
        <Typography variant="h2">Part A</Typography>
        <Typography variant="h4">
          1. After you press the "Start the Experiment" button, you should see a
          gallery like the one below.
        </Typography>
        <Grid container padding={2} spacing={2}>
          {items.map((item, index) => (
            <Grid item key={index} xs={12} md={3}>
              <ClothItem
                onLike={(liked) => {
                  console.log(liked);
                }}
                onShop={() => {
                  console.log("shop");
                }}
                id={item}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4">
          2. You should mark with a heart the skirts that you have an opinion
          about or leave blank those that you are indiferent. Then you can click
          on "More Skirts Recommendations" to load more skirts based on your
          given preferences.
        </Typography>
        <Typography variant="h4">
          3. Whenever you find a skirt that you like (would buy), click on the
          <ShoppingCart /> (shopping cart) button to finalize the current part
          of the experiment.
        </Typography>
        </Box>
        <Box component="section" sx={{margin: 2}}>
        <Typography variant="h2">Part B</Typography>
        <Typography variant="h4">
          It's similar to Part A, but to the right of the screen you have a
          chatbot you can interact with. You can ask the chatbot for specific
          types of skirts. The information that is available for you to ask the
          chatbot is that in the catalog as provided at the top of this page.
        </Typography>
        </Box>
        <Box component="section" sx={{margin: 2}}>
        <Typography variant="h2">Part C</Typography>
        <Typography variant="h4">
          As Part B but a chatbot waits for your input to present any initial
          suggestions.
        </Typography>
        </Box>
      </Container>
    </Box>
  );
}
