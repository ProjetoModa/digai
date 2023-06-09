import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ClothItem from "../components/ClothItem";
import ChatArea, { Message } from "../components/ChatArea";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecommenderService from "../services/recommenderService";
import ChatbotService from "../services/chatbotService";
import PromptDialog from "../components/PromptDialog";

export default function PartB() {
  let uuid = useRef<string | null>(null);
  let productSelected = useRef<string | null>(null);
  let [state, setState] = useState<any>(null);
  const [items, setItems] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const getRecommendations = (overrideState?: any) => {
    RecommenderService.recomm(overrideState || state).then((newItems) => {
      setItems((at) => {
        const newList = at.concat(newItems.products);
        localStorage.setItem("itemsB", JSON.stringify(newList));
        return newList;
      });
    });
  };
  const sendMessage = (utterance: string) => {
    ChatbotService.chat(uuid.current!, utterance).then((result) => {
      setState((at: any) => {
        localStorage.setItem("state", JSON.stringify(result.state));
        return {
          ...at,
          state: result.state,
        };
      });
      setMessages((msgs) => {
        const newMessages = msgs.concat([{ self: true, text: utterance }]);
        localStorage.setItem("messages", JSON.stringify(newMessages));
        return newMessages;
      });
      for (const action of result.actions) {
        switch (action.action) {
          case "recommend":
            getRecommendations(result.state);
            break;
          case "answer":
            setMessages((msgs) => {
              const newMessages = msgs.concat([
                { self: false, text: action.text },
              ]);
              localStorage.setItem("messages", JSON.stringify(newMessages));
              return newMessages;
            });
            break;
          default:
            console.log(`${action.action} not implemented`);
        }
      }
    });
  };

  const finishExperiment = () => {
    ChatbotService.finish(uuid.current!, productSelected.current!).then(
      (session) => {
        localStorage.setItem("state", JSON.stringify(session.state));
        navigate(session.state.page);
      }
    );
  };

  useEffect(() => {
    let ignore = false;
    uuid.current = localStorage.getItem("uuid");
    const state = JSON.parse(localStorage.getItem("state") || "null");
    if (!uuid.current || !state) {
      navigate("/");
    } else {
      setState((_: any) => state);
      const lastItems = localStorage.getItem("itemsB");
      if (lastItems) {
        setItems((_) => JSON.parse(lastItems));
      } else {
        RecommenderService.recomm(state).then((newItems) => {
          if (!ignore) {
            setItems((at) => {
              const newList = at.concat(newItems.products);
              localStorage.setItem("itemsB", JSON.stringify(newList));
              return newList;
            });
          }
        });
      }

      const lastMessages = localStorage.getItem("messages");
      if (lastMessages) {
        setMessages((_) => JSON.parse(lastMessages));
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
        <Grid container>
          <Grid item xs={12} md={8}>
            <Grid container padding={2} spacing={2}>
              {items.map((item, index) => (
                <Grid item key={index} xs={12} md={3}>
                  <ClothItem
                    onLike={(liked) => {
                      if (liked) {
                        ChatbotService.like(uuid.current!, item).then(
                          (session) => {
                            setState((at: any) => {
                              localStorage.setItem(
                                "state",
                                JSON.stringify(session.state)
                              );
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
                              localStorage.setItem(
                                "state",
                                JSON.stringify(session.state)
                              );
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
                      productSelected.current = item;
                      setDialog({
                        open: true,
                        title: "Finish",
                        description:
                          "Are you sure that you found your skirt and want to finish the experiment?",
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
                  getRecommendations();
                }}
              >
                More Skirts Recommendations
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <ChatArea messages={messages} onMessage={sendMessage} />
          </Grid>
        </Grid>
        <PromptDialog
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
          onOk={finishExperiment}
        />
      </Container>
    </Box>
  );
}
