import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Box, Button } from "@mui/material";
import "./dashboard.css";

const navItems = [
  { name: "Colleges", href: "#/college-list" },
  { name: "Courses", href: "#/course-list" },
  { name: "Sign In", href: "#/login" },
];

const defaultTheme = createTheme();

export default function Dashboard() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar component="nav" color="success">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 10, display: { xs: "none", sm: "block" } }}
          >
            Educational Seva
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.name} href={item.href} sx={{ color: "#fff" }}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
