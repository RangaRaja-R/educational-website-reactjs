import React from "react";
import "./App.css";
import Dashboard from "./modo/dashboard";
import { Routes, Route } from "react-router-dom";
import Courses from "./ranga/courseList";
import DegList from "./gowtham/degreeList";
import data from "./gowtham/college.json";
import Home from "./modo/home";
import ClgList from "./gowtham/collegeList";
import Degree from "./modo/degree";
import Link from "@mui/material/Link";

function Copyright(props) {
  return (
    <div
      style={{ marginTop: "15px" }}
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
        href="https://www.linkedin.com/in/gowtham-k-009590261"
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
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<Courses />} />
        <Route path="/college-list" element={<ClgList />} />
        <Route path="/degree-list/:id" element={<DegList d={data} />} />
        <Route path="/degree-details/:id" element={<Degree />} />
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
