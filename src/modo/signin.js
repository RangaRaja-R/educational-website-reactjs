import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [hash, setHash] = useState("");
  const [user_error, setUserError] = useState("");
  const [visi, setVisi] = useState(false);
  const navi = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/user/login", {
        username: username,
        hash: hash,
      })
      .then((res) => {
        if (res.data == "login successful") {
          navi("/");
        } else {
          setUserError(res.data);
        }
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "green" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address/username"
              name="email"
              autoComplete="email"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={visi ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={hash}
              onChange={(e) => {
                setHash(e.target.value);
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={visi}
                  onClick={() => setVisi(!visi)}
                  color="success"
                />
              }
              label="Show Password"
            />
            {user_error == "" ? (
              <></>
            ) : (
              <p style={{ color: "red", fontSize: "12px" }}>*{user_error}</p>
            )}
            <Button
              type="submit"
              onSubmit={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href="#/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
