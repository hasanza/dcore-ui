import React, { useContext, useState, useEffect } from "react";
import styles from "./ProjectList.module.css";
import { GlobalContext } from "../../store/GlobalState";
import { Project } from "../";

function ProjectList() {
  const { projects } = useContext(GlobalContext);
  const [clicked, setClicked] = useState(false);
  let fewProjects = projects;

  useEffect(() => {
    fewProjects.slice(0, 5);
  }, [fewProjects]);

  function handleClick() {
    setClicked(!clicked);
  }

  if (clicked) {
    return (
      <>
        <div className={styles.projectCatalogue}>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
          <div className={styles.viewAll} onClick={handleClick}>
            Less
          </div>
        </div>
      </>
    );
  } else if (!clicked) {
    return (
      <>
        <div className={styles.projectList}>
          {projects.slice(0, 5).map((project, index) => (
            <Project key={index} project={project} />
          ))}
          <div className={styles.viewAll} onClick={handleClick}>
            More
          </div>
        </div>
      </>
    );
  }
}

export default ProjectList;
