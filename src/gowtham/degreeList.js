import React, { useState } from "react";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import "./degreeList.css";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function DegList() {
  const navi = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [course_list, setCourses] = useState([]);
  const [course_id, setId] = useState([]);
  const handeClick = () => {
    navi(-1);
  };
  const handleGo = (id) => {
    navi(`/degree-details/`, {
      state: { message: "hello there", id: course_id[id] },
    });
  };
  const Mapping = ({ item, toggle }) => {
    return (
      <div>
        <div className="coursecontainer" onClick={toggle}>
          <p>{item}</p>
        </div>
      </div>
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("http://localhost:8080/college/get-all").then((res) => {
      setCourses(res.data[parseInt(params.id)].degree_name);
      setId(res.data[parseInt(params.id)].degree_id);
      setData(res.data[parseInt(params.id)]);
    });
    window.addEventListener("keyup", function (event) {
      event.preventDefault();

      if (event.key === "Escape" || event.keyCode === 27) {
        navi("/college-list");
      }
    });
  }, []);
  return (
    <div className="college-details">
      <div className="clgdetback">
        <Button variant="outlined" color="success" onClick={handeClick}>
          back
        </Button>
      </div>
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
              {course_list.map((item, index) => {
                return (
                  <Mapping
                    item={item}
                    key={index}
                    toggle={() => handleGo(index)}
                  />
                );
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
              <LocationOnTwoToneIcon fontSize="large" />
              <a href={data.map} target="_blank">
                {data.address}
              </a>
            </dd>
            <dd>
              <CallTwoToneIcon fontSize="medium" />
              {data.num}
            </dd>
            <dd>
              <LanguageTwoToneIcon fontSize="medium" />
              <a href={data.link} target="_blank">
                {data.short}
              </a>
            </dd>
            <dd>
              <EmailTwoToneIcon fontSize="medium" />
              <a href={data.mail} target="_blank">
                {data.mail}
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default DegList;
