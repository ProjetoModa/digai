import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import theme from "../theme";
import { createRef, useEffect } from "react";

export type Message = {
  self: boolean;
  text: string;
};

export type ChatAreaProps = {
  messages: Message[];
};

export default function ChatArea({ messages }: ChatAreaProps) {
  const lastMessage = createRef<HTMLDivElement>();
  useEffect(()=>{lastMessage.current?.scrollIntoView({ behavior: 'smooth' })},[messages]);
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "50vh",
        position: "fixed",
        margin: 2,
        color: "#000000",
      }}
    >
      <CardHeader title="Chat" subheader={<Divider />} />
      <CardContent sx={{ flex: 1, height: "100%", overflowY: "scroll" }}>
        <List sx={{  }}>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText
                sx={{
                  textAlign: message.self ? "end" : "start",
                  background: message.self
                    ? theme.palette.secondary.main
                    : theme.palette.grey[200],
                  padding: 1,
                  borderRadius: 2,
                  borderTopLeftRadius: message.self ? undefined : 0,
                  borderTopRightRadius: message.self ? 0 : undefined,
                }}
                primary={message.text}
              ></ListItemText>
            </ListItem>
          ))}
          <div ref={lastMessage}></div>
        </List>
      </CardContent>
      <CardActions>
        <TextField
          sx={{ input: { color: "#000000" } }}
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton color="primary">
                <Send />
              </IconButton>
            ),
          }}
        />
      </CardActions>
    </Card>
  );
}
