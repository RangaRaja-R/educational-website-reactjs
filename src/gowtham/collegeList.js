import * as React from "react";
import { Button, TextField } from "@mui/material";
import d from "./college.json";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./collegeList.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

function ord(a, b) {
  return a.name.localeCompare(b.name);
}

export default function ClgList() {
  const navi = useNavigate();
  const [data, setData] = useState([]);
  data.sort(ord);
  const [q, setq] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("http://localhost:8080/college/get-all").then((res) => {
      setData(res.data);
    });
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    if (q) {
      let filtered = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(q.toLowerCase()) ||
          item.district.toLowerCase().includes(q.toLowerCase()) ||
          item.short.toLowerCase().includes(q.toLowerCase()) ||
          item.code.toLowerCase().includes(q.toLowerCase()) ||
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
  const HandleClick = (id) => {
    navi(`/degree-list/${id}`);
  };
  useEffect(() => {
    window.addEventListener("keyup", function (event) {
      event.preventDefault();

      if (event.key === "Escape" || event.keyCode === 27) {
        navi("/");
      }
    });
  }, []);
  return (
    <div className="college-list">
      <div className="back">
        <Button variant="outlined" color="success" href="#/">
          back
        </Button>
      </div>
      <div className="headerr">
        <h2>Colleges</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            type="text"
            val={q}
            label="Search"
            onChange={(e) => {
              setq(e.target.value);
              if (!e.target.value) {
                setData(d);
              } else {
                handleSubmit(e);
              }
            }}
          />
          <Button type="submit">
            <SearchIcon />
          </Button>
        </form>
      </div>
      {data.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Search Not Found</h3>
      ) : (
        data.map((item, index) => (
          <div
            className="crscontainer"
            onClick={() => HandleClick(index)}
            key={index}
          >
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
        ))
      )}
    </div>
  );
}
