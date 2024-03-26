import React, { useState } from "react";
import degree from "./degree.json";
import "./degree.css";
import { useParams, useNavigate } from "react-router";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Degree() {
  const params = useParams();
  const navi = useNavigate();
  const loc = useLocation();
  const [item, setItem] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [responsibilities, setResponsibilities] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:8080/degree/get?id=${loc.state.id}`)
      .then((res) => {
        setItem(res.data);
        setJobs(res.data.jobs);
        setResponsibilities(res.data.responsibilities);
        setSkills(res.data.skills);
      });

    window.addEventListener("keyup", function (event) {
      event.preventDefault();
      console.log(loc.state);
      if (event.key === "Escape" || event.keyCode === 27) {
        navi("/college-list");
      }
    });
  }, []);
  return (
    <div className="degree">
      <div className="details">
        <div className="backend">
          <Button variant="outlined" color="success" href="/college-list">
            Back
          </Button>
        </div>
        <div className="branch">
          <h1>{item.branch}</h1>
        </div>
        <div className="desc">
          <div className="items">
            <dl>
              <dt>
                <h2>Description</h2>
              </dt>
              <dd className="about">{item.about}</dd>
            </dl>
          </div>
          <dl>
            <dt>
              <h2>Jobs</h2>
            </dt>
            <dd>
              {jobs.map((items) => (
                <li>{items}</li>
              ))}
            </dd>
          </dl>
          <dl>
            <dt>
              <h2>Responsibilities</h2>
            </dt>
            <dd>
              {responsibilities.map((i) => (
                <li>{i}</li>
              ))}
            </dd>
          </dl>
          <dl>
            <dt>
              <h2>Skills</h2>
            </dt>
            <dd>
              {skills.map((items) => (
                <li>{items}</li>
              ))}
            </dd>
          </dl>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Degree;
