import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ClothItem from "../components/ClothItem";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecommenderService from "../services/recommenderService";
import ChatbotService from "../services/chatbotService";

export default function PartA() {
  let uuid = useRef<string | null>(null);
  let [state, setState] = useState<any>(null);
  const [items, setItems] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    let ignore = false;
    uuid.current = localStorage.getItem("uuid");
    const state = JSON.parse(localStorage.getItem("state") || "null");
    if (!uuid.current || !state) {
      navigate("/");
    } else {
      setState((_: any) => state);
      const lastItems = localStorage.getItem("itemsA");
      if (lastItems) {
        setItems((_) => JSON.parse(lastItems));
      } else {
        RecommenderService.recomm(state).then((newItems) => {
          if (!ignore) {
            setItems((at) => {
              const newList = at.concat(newItems.products);
              localStorage.setItem("itemsA", JSON.stringify(newList));
              return newList;
            });
          }
        });
      }
    }
    return () => {
      ignore = true;
    };
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
                  if (liked) {
                    ChatbotService.like(uuid.current!, item).then(
                      (session) => {
                        setState((at: any) => {
                          localStorage.setItem("state", JSON.stringify(session.state));
                          return {
                            ...at,
                            state: session.state,
                          };
                        });
                      }
                    );
                  } else {
                    ChatbotService.dislike(uuid.current!, item).then(
                      (session) => {
                        setState((at: any) => {
                          localStorage.setItem("state", JSON.stringify(session.state));
                          return {
                            ...at,
                            state: session.state,
                          };
                        });
                      }
                    );
                  }
                }}
                onShop={() => {
                  ChatbotService.finish(uuid.current!, item).then((session) => {
                    localStorage.setItem("state", JSON.stringify(session.state));
                    navigate(session.state.page);
                  });
                }}
                id={item}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", margin: 2 }}>
          <Button
            variant="contained"
            onClick={() => {
              RecommenderService.recomm(state).then((newItems) => {
                setItems((at) => {
                  const newList = at.concat(newItems.products);
                  localStorage.setItem("itemsA", JSON.stringify(newList));
                  return newList;
                });
              });
            }}
          >
            More Skirts Recommendations
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
