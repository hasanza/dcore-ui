import React, { useState, useContext } from "react";
import styles from "./Project.module.css";
import { GlobalContext } from "../../store/GlobalState";
import Pulse from "react-reveal";

function Project({ project }) {
  const { setCurrentProject, scrubViewQuestion } = useContext(GlobalContext);

  const [p, setP] = useState(project);

  const setProject = () => {
    setCurrentProject(p);
    scrubViewQuestion();
    console.log(p.name);
  };

  return (
    <Pulse>
      <div className={styles.project} onClick={setProject}>
        <img src={project.img} alt="project"></img>
      </div>
    </Pulse>
  );
}

export default Project;
