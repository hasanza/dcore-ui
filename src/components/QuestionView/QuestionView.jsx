import React, { useContext } from "react";
import styles from "./QuestionView.module.css";
import { GlobalContext } from "../../store/GlobalState";
import Fade from "react-reveal/Fade";
import Rating from "react-rating";

function QuestionView() {
  const { viewQuestion } = useContext(GlobalContext);
  const { currentProject } = useContext(GlobalContext);

  if (viewQuestion.description) {
    return (
      <div className={styles.questionView}>
        <h2>{viewQuestion.title}</h2>
        <div className={styles.reward}>
          <div className={styles.coin}>RP</div>
          <span>{viewQuestion.reward}</span>
        </div>

        <p>{viewQuestion.description}</p>
        <form action="/">
          <div className={styles.rating}>
            <label
              htmlFor="rating"
              style={{
                color: "#007480",
                fontWeight: "700",
                marginBottom: "5px",
              }}
            >
              Rating
            </label>
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Rating />
            </div>
          </div>
          <label
            style={{ color: "#007480", fontWeight: "700" }}
            htmlFor="explanation"
          >
            Explanation
          </label>
          <textarea className={styles.ans}></textarea>
        </form>
        <p className={styles.submit}>Submit</p>
      </div>
    );
  } else if (currentProject.info.website === "") {
    return (
      <div
        style={{ textAlign: "center", height: "94.5vh" }}
        className={styles.info}
      >
        <Fade bottom>
          <h2>Please select a Project</h2>
        </Fade>
      </div>
    );
  }
  return (
    <div className={styles.info} style={{color: "black"}}>
      <h3>Project Details</h3>
      <p>{currentProject.info.details}</p>
      <h3>Project Website</h3>
      <p>
        <a href={currentProject.info.website}>{currentProject.info.website}</a>
      </p>
      <h3>Project Phase</h3>
      <p>The project is currently in {currentProject.info.phase}</p>
    </div>
  );
}

export default QuestionView;
