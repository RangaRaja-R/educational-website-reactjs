import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import data from "./college.json";
import { useNavigate } from "react-router-dom";
import "./collegeList.css";
export default function ClgList() {
  const navi = useNavigate();
  const HandleClick = () => {
    navi("/DegreeList");
  };
  return (
    <div>
      <h1 align={"center"}>College List</h1>
      {data.map((item) => (
        <div className="coursecontainer" onClick={HandleClick}>
          <div className="courseimagecontainer">
            <img className="courseimage" src={item.url} alt="img" />
            <h3 className="code">Code:{item.code}</h3>
          </div>
          <div className="coursedetailscontainer">
            <div className="coursetitlecontainer">
              <h3 className="coursetitle">{item.name}</h3>
              <p className="courseprice">Rank:{item.rank}</p>
            </div>
            <p className="courseauthor">{item.district}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
