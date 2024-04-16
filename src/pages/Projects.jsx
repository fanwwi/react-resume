import React from "react";
import proj1 from "../img/proj1.png";
import proj2 from "../img/proj2.png";
import proj3 from "../img/proj3.png";
import proj4 from "../img/proj4.png";
import proj5 from "../img/proj5.png";
import proj6 from "../img/proj6.png";

const Projects = () => {
  return (
    <div>
      <div className="container">
        <div className="proj">
          <img src={proj1} alt="" className="proj-img" /><br />
          <img src={proj2} alt="" className="proj-img" /><br />
          <img src={proj3} alt="" className="proj-img" /><br />
          <img src={proj4} alt="" className="proj-img" /><br />
          <img src={proj5} alt="" className="proj-img" /><br />
          <img src={proj6} alt="" className="proj-img" /><br />
        </div>
      </div>
    </div>
  );
};

export default Projects;
