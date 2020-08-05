import React, { useState, useContext } from "react";
import styles from "./Project.module.css";
import { GlobalContext } from "../../store/GlobalState";


function Project({ project }) {
  const { setCurrentProject, scrubViewQuestion } = useContext(GlobalContext);

  const [p] = useState(project);

  const setProject = () => {
    setCurrentProject(p);
    scrubViewQuestion();
    console.log(p.name);
  };

  return (
    <>
      <div className={styles.project} onClick={setProject}>
        <img src={project.img} alt="project"></img>
      </div>
    </>
  );
}

export default Project;
