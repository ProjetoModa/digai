import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

export type TextProps = {
  title: string;
};

export default function Text({ title }: TextProps) {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader sx={{ color: "#000000" }} title={title} />
      <CardContent>
        <TextField
          sx={{ textarea: { color: "#000000" } }}
          id="filled-multiline-static"
          multiline
          fullWidth
          rows={4}
          variant="filled"
          value={text}
          onChange={handleChange}
        />
      </CardContent>
    </Card>
  );
}
