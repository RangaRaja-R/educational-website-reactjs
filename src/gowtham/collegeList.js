import * as React from "react";
import { Button } from "@mui/material";
import d from "./college.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./collegeList.css";
export default function ClgList() {
  const navi = useNavigate();
  const HandleClick = (id) => {
    navi(`/degree-list/${id}`);
  };
  const [data, setData] = useState(d);
  const [q, setq] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(d);
    if (q) {
      let filtered = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(q.toLowerCase()) ||
          item.district.toLowerCase().includes(q.toLowerCase()) ||
          item.short.toLowerCase().includes(q.toLowerCase()) ||
          item.Degree.map((item) => {
            return item.name;
          })
            .join("")
            .toLowerCase()
            .includes(q.toLowerCase())
        );
      });
      setData(filtered);
    } else {
      setData(d);
    }
  }
  return (
    <div>
      <div className="back">
        <Button variant="outlined" color="success" href="/">
          back
        </Button>
      </div>
      <div className="headerr">
        <h2>Colleges</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          val={q}
          onChange={(e) => {
            setq(e.target.value);
            if (!e.target.value) {
              setData(d);
            }
          }}
        />
        <Button type="submit">search</Button>
      </form>
      {data.map((item, index) => (
        <div className="crscontainer" onClick={() => HandleClick(index)}>
          <div className="crsimg">
            <img className="imagee" src={item.url} alt="img" />
          </div>
          <div className="crsdetailscontainer">
            <div className="crstitlecontainer">
              <div>
                <h3 className="crstitle">{item.name}</h3>
                <h3 className="code">Code:{item.code}</h3>
              </div>
              <p className="crsprice">Rank:{item.rank}</p>
            </div>
            <p className="crsauthor">{item.district}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
