import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PartA from "./pages/PartA.tsx";
import PartB from "./pages/PartB.tsx";
import InterAB from "./pages/InterAB.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/part-a",
    element: <PartA />,
  },
  {
    path: "/inter-ab",
    element: <InterAB />,
  },
  {
    path: "/part-b",
    element: <PartB />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
