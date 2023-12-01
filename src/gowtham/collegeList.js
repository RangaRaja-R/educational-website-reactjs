import * as React from "react";
import { Button } from "@mui/material";
import data from "./college.json";
import { useNavigate } from "react-router-dom";
import "./collegeList.css";
export default function ClgList() {
  const navi = useNavigate();
  const HandleClick = (id) => {
    navi(`/DegreeList/${id}`);
  };
  return (
    <div>
      <div className="back">
        <Button variant="outlined" color="success" href="/">
          back
        </Button>
      </div>
      <div className="headerr">
        <h2>College List</h2>
      </div>
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
              <p className="crseprice">Rank:{item.rank}</p>
            </div>
            <p className="crseauthor">{item.district}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
