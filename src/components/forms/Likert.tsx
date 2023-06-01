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
  styled,
  tableCellClasses,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: grey[400],
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.common.black,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export type LikertProps = {
  title: string;
};

export default function Likert({ title }: LikertProps) {
  const [partA, setPartA] = useState("");
  const [partB, setPartB] = useState("");

  const handleA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPartA(event.target.value);
  };
  const handleB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPartB(event.target.value);
  };
  return (
    <Card sx={{margin: 2}}>
      <CardHeader sx={{color: "#000000"}} title={title} />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ width: "16%" }}>Part</StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  Strongly agree
                </StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>Agree</StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>Neutral</StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  Disagree
                </StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  Strongly disagree
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell sx={{ width: "16%" }}>Part A</StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  <Radio
                    checked={partA === "1"}
                    onChange={handleA}
                    value="1"
                    name="partA"
                    inputProps={{ "aria-label": "1" }}
                  />
                </StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  <Radio
                    checked={partA === "2"}
                    onChange={handleA}
                    value="2"
                    name="partA"
                    inputProps={{ "aria-label": "2" }}
                  />
                </StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  <Radio
                    checked={partA === "3"}
                    onChange={handleA}
                    value="3"
                    name="partA"
                    inputProps={{ "aria-label": "3" }}
                  />
                </StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  <Radio
                    checked={partA === "4"}
                    onChange={handleA}
                    value="4"
                    name="partA"
                    inputProps={{ "aria-label": "4" }}
                  />
                </StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  <Radio
                    checked={partA === "5"}
                    onChange={handleA}
                    value="5"
                    name="partA"
                    inputProps={{ "aria-label": "5" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell sx={{ width: "16%" }}>Part B</StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  <Radio
                    checked={partB === "1"}
                    onChange={handleB}
                    value="1"
                    name="partB"
                    inputProps={{ "aria-label": "1" }}
                  />
                </StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  <Radio
                    checked={partB === "2"}
                    onChange={handleB}
                    value="2"
                    name="partB"
                    inputProps={{ "aria-label": "2" }}
                  />
                </StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  <Radio
                    checked={partB === "3"}
                    onChange={handleB}
                    value="3"
                    name="partB"
                    inputProps={{ "aria-label": "3" }}
                  />
                </StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  <Radio
                    checked={partB === "4"}
                    onChange={handleB}
                    value="4"
                    name="partB"
                    inputProps={{ "aria-label": "4" }}
                  />
                </StyledTableCell>
                <StyledTableCell sx={{ width: "16%" }}>
                  <Radio
                    checked={partB === "5"}
                    onChange={handleB}
                    value="5"
                    name="partB"
                    inputProps={{ "aria-label": "5" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
