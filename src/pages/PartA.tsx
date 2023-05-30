import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ClothItem from "../components/ClothItem";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PartA() {
  const items = [
    "Smocked_Bandana_Print_Skirt/img_00000016.jpg",
    "Structured_Mesh_Skater_Skirt/img_00000027.jpg",
    "Smocked_Bandana_Print_Skirt/img_00000016.jpg",
    "Smocked_Bandana_Print_Skirt/img_00000016.jpg",
    "Smocked_Bandana_Print_Skirt/img_00000016.jpg",
    "Smocked_Bandana_Print_Skirt/img_00000016.jpg",
    "Smocked_Bandana_Print_Skirt/img_00000016.jpg",
    "Smocked_Bandana_Print_Skirt/img_00000016.jpg",
  ];
  let uuid: string | null;
  const navigate = useNavigate();

  useEffect(() => {
    uuid = localStorage.getItem("uuid");
    if (!uuid) {
      navigate("/");
    }
  }, []);

  return (
    <Box component="main">
      <Box component="header" className="header" sx={{ textAlign: "center" }}>
        <Container sx={{ padding: 4 }}>
          <Typography variant="h5">
            Please, let us know all that you like and dislike, and if you find a
            skirt that you want to buy, just click in the corresponding shopping
            cart.
          </Typography>
        </Container>
      </Box>
      <Container>
        <Grid container padding={2} spacing={2}>
          {items.map((item, index) => (
            <Grid item key={index} xs={12} md={3}>
              <ClothItem
                onLike={(liked) => {
                  console.log(`Liked ${liked} ${item}`);
                }}
                onShop={()=>{
                  console.log(`Shop ${item}`);
                }}
                id={item}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", margin: 2 }}>
          <Button variant="contained">More Skirts Recommendations</Button>
        </Box>
      </Container>
    </Box>
  );
}
