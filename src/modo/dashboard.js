import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { inline } from "@floating-ui/core";
import { TextField } from "@mui/material";
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
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="dashh">
        <AppBar position="absolute" open={open} color="success">
          <div className="dash" color="inherit">
            <h2>Educational information sevai</h2>
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
          <div className="list">
            <div className="listheader">
              <h1>government colleges list</h1>
              <h2>list of colleges</h2>
              <Button variant="contained" color="success" size="small">
                Go
              </Button>
            </div>
            <div className="photo"></div>
          </div>
          <div className="list">
            <div className="listheader">
              <h1>TNEA counselling colleges list</h1>
              <h2>list of colleges</h2>
              <Button variant="contained" color="success" size="small">
                Go
              </Button>
            </div>
            <div className="photo"></div>
          </div>
          <Copyright sx={{ pt: 4 }} />
        </div>
      </div>
    </ThemeProvider>
  );
}
