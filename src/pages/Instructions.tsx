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

export default function Instructions() {
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
              Instructions
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
        <Typography variant="h2">Catalog</Typography>
        <Typography variant="h4">
          The scope of this experiment is limited by the catalog used. The
          information in the catalog relates to skirts with the following
          features only:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Card>
              <CardHeader title="Color" />
              <CardContent>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Black" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Blue" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Brown" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Beige" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Gray" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Green" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Orange" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Pink" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Purple" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Red" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="White" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Yellow" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title="Fabric" />
              <CardContent>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Denim" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Knitted" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Laced" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Glossy / Leather" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="General Fabric (Cotton, Polyester)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Velvet" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title="Pattern" />
              <CardContent>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Animal Print" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Geometric" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Camouflage" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Checked" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Floral" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Paisley" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Plain" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Polka Dot" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Striped" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Tie Dyed" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title="Size" />
              <CardContent>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Mini" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Midi" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Maxi" />
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
                    <ListItemText primary="Pleated (waves or Folds)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Straight" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Asymetrica" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h4">
          The experiment has Parts A, B and C.
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
