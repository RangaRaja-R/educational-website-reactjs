import React from "react";
import "./App.css";
// import Dashboard from "./modo/dashboard";
import { Routes, Route } from "react-router-dom";
import Courses from "./ranga/courseList";
import DegList from "./gowtham/degreeList";
import Home from "./modo/home";
import ClgList from "./gowtham/collegeList";
import Degree from "./modo/degree";
import Link from "@mui/material/Link";
import Dashboard from "./modo/tempDash";
import SignIn from "./modo/signin";
import SignUp from "./modo/signup";


function Copyright(props) {
  return (
    <div
      style={{
        marginTop: "15px",
        position: "fixed",
        bottom: "0px",
        textDecoration: "none",
        textAlign: "center",
        width: "100%",
        backgroundColor: "rgba(245, 245, 245, 0.1)",
        backdropFilter: "blur(1px)",
      }}
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      className="copy"
    >
      {"Created by "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/rangaraja-r"
        target="_blank"
      >
        Ranga Raja R
      </Link>
      {", "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/madhav-shriram-s-87b706258"
        target="_blank"
      >
        Madhav Shriram
      </Link>
      {" and "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/gowtham-cyber-max"
        target="_blank"
      >
        Gowtham
      </Link>{" "}
      {"."}
    </div>
  );
}

function App() {
  return (
    <div>
      <Dashboard />
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<Courses />} />
        <Route path="/college-list" element={<ClgList />} />
        <Route path="/degree-list/:id" element={<DegList />} />
        <Route path="/degree-details/" element={<Degree />} />
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
