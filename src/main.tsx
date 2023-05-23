import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recomm from "./pages/Recomm.tsx";
import PartB from "./pages/PartB.tsx";
import Chat from "./pages/Chat.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recomm",
    element: <Recomm />,
  },
  {
    path: "/part-b",
    element: <PartB />,
  },
  {
    path: "/chat",
    element: <Chat />,
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
