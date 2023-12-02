import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Navigate from "../navigator";
import "./dashboard.css";

function Copyright(props) {
  return (
    <div
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      className="copy"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.naanmudhalvan.tn.gov.in/">
        naanmudhalvan
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="dashh">
        <AppBar position="absolute" open={false} color="success">
          <div className="dash" color="inherit">
            <h1>Educational Seva</h1>
          </div>
        </AppBar>
        <div
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Navigate />
          <Copyright sx={{ pt: 4 }} />
        </div>
      </div>
    </ThemeProvider>
  );
}
