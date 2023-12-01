import React from "react";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import "./degreeList.css";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import { useParams } from "react-router-dom";
function DegList({ d }) {
  const params = useParams();
  console.log(params);
  const data = d[parseInt(params.id)];
  const Mapping = ({ item }) => {
    return (
      <div>
        <div className="coursecontainer">
          <p>{item.name}</p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="Title">
        <h1>{data.name}</h1>
      </div>
      <div className="Body">
        <div className="About">
          <dl>
            <dt>
              <h3>About us</h3>
            </dt>
            <dd>
              <p className="paragraph">&emsp;{data.para}</p>
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>
              <h3>Course List</h3>
            </dt>
            <dd>
              {data.Degree.map((item) => {
                return <Mapping item={item} />;
              })}
            </dd>
          </dl>
        </div>
        <div className="loc">
          <dl>
            <dt>
              <h3>Contact us</h3>
            </dt>
            <dd>
              <LocationOnTwoToneIcon font-size="large" />
              <a href={data.map} target="_blank">
                {data.address}
              </a>
            </dd>
            <dd>
              <CallTwoToneIcon font-size="medium" />
              {data.num}
            </dd>
            <dd>
              <LanguageTwoToneIcon font-size="medium" />
              <a href={data.link} target="_blank">
                {data.sort}
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default DegList;
