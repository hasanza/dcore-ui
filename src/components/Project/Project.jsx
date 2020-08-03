import React, {useState, useContext} from "react";
import styles from "./Project.module.css";
import { GlobalContext } from "../../store/GlobalState";

function Project({ project }) {
  const { setCurrentProject, scrubViewQuestion } = useContext(GlobalContext);

  const [p, setP] = useState(project);

  const setProject = () => {
      setCurrentProject(p);
      scrubViewQuestion();
  }

  return (
    <div className={styles.project} onClick={setProject}>
      <h3>{project.name}</h3>
    </div>
  );
}

export default Project;
