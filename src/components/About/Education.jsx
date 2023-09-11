import React from "react";

function Education() {
  return (
    <div id="education">
      {/* <h2 className="edu-heading">
        <b>Education</b>
      </h2> */}
      <div className="about-content">
        <p className="edu-text">
          <b>HDip Applied Computing Technology </b>
          <b>|</b> University College Cork <b>|</b> 2020-2021 <b>|</b>{" "}
          <b>1.1</b>
        </p>
        <ul className="moduleList">
          <li>Web Development | Python Programming</li>
          <li>Relational Databases | Applications Programming</li>
          <li>Internet Computing | Multimedia</li>
          <li>Hardware Organisation | Systems Organisation</li>
        </ul>
        <p className="edu-text">
          <b>MSc Exploration Field Geology </b>
          <b>|</b> University College Cork <b>|</b> 2015-2016 <b>|</b>{" "}
          <b>2.1</b>
          <ul>
            <li className="eduAboutText">
              MSc Research Thesis: 3D Seismic interpretation of regional events
              in the Celtic Sea and North Celtic Sea Basins.
            </li>
          </ul>
        </p>
        <p className="edu-text">
          <b>BSc Environmental Science: Geology </b> <b>|</b> University College
          Cork <b>|</b> 2011-2015 <b>|</b> <b>2.1</b>
          <ul>
            <li className="eduAboutText">
              Undergraduate Thesis; Geological survey of Dunquin, Co. Kerry,
              Ireland.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Education;
