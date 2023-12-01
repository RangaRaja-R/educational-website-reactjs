import React from "react";
import degree from "./degree.json";
import "./degree.css";
import { useParams } from "react-router";

function Degree() {
  const params = useParams();
  const id = parseInt(params.id) < degree.length ? parseInt(params.id) : 0;
  const item = degree[id];
  return (
    <div>
      <div className="details">
        <div className="branch">
          <h1>{item.branch}</h1>
        </div>
        <div className="desc">
          <div className="items">
            <dl>
              <dt>
                <h2>Description</h2>
              </dt>
              <dd>{item.about}</dd>
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
              <h2>Qualifications</h2>
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
