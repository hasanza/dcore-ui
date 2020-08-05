import React, { useContext } from "react";
import styles from "./QuestionView.module.css";
import { GlobalContext } from "../../store/GlobalState";
import Fade from "react-reveal/Fade";
import Rating from "react-rating";

//receives question from parent
function QuestionView() {
  const { viewQuestion } = useContext(GlobalContext);

  //receive data as prop from Question and display it.
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
              <Rating/>
              {/* <h3 style={{ marginLeft: "5px", color: "red" }}>Not Applicable</h3> */}
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
  } else {
    return (
      <div className={styles.info}>
        <Fade bottom>
          <h2 id={styles.prompt}>Select a question to answer it</h2>
        </Fade>
      </div>
    );
  }
}

export default QuestionView;
