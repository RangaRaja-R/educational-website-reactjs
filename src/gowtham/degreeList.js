import React from "react";
import { CardMedia } from "@mui/material";
import './degreeList.css';
function DegList({data}) {
    const Mapping=({item})=>
    {
        return(
            <div>
              <div className="coursecontainer">
              <div className="courseimagecontainer">
              <img className="course" src={item.url} alt="img" />
                </div>
                <p>{item.name}</p>
              </div>
            </div>
            

        )
    };
  return (
      <div>
      <div className="Title"><h2></h2></div>
      <div className="imagecontainer">
        <img className="image"src={data.url} alt="image"/>
      </div>
      <div>
      <h3>Courses</h3>
      </div>
      {data.Degree.map((item) => {return <Mapping item={item}/>})}
    </div>
  )
}

export default DegList;
