import React from "react";
import degree from "./degree.json";
import "./degree.css";
import { useParams, useNavigate } from "react-router";
import { Button } from "@mui/material";
import { useEffect } from "react";

function Degree() {
  const params = useParams();
  const navi = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("keyup", function (event) {
      event.preventDefault();

      if (event.key === "Escape" || event.keyCode === 27) {
        navi("/college-list");
      }
    });
  }, []);
  const id = parseInt(params.id) < degree.length ? parseInt(params.id) : 0;
  const item = degree[id];
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
              {item.jobs.map((items) => (
                <li>{items}</li>
              ))}
            </dd>
          </dl>
          <dl>
            <dt>
              <h2>Responsibilities</h2>
            </dt>
            <dd>
              {item.responsibilities.map((i) => (
                <li>{i}</li>
              ))}
            </dd>
          </dl>
          <dl>
            <dt>
              <h2>Skills</h2>
            </dt>
            <dd>
              {item.qualifications.map((items) => (
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
