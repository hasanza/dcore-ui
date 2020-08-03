import React, { useContext } from "react";
import styles from "./QuestionView.module.css";
import { GlobalContext } from "../../store/GlobalState";
import Fade from "react-reveal/Fade";
//receives question from parent
function QuestionView() {
  const { viewQuestion } = useContext(GlobalContext);
  //receive data as prop from Question and display it.
  if (viewQuestion.description) {
    return (
      <div className={styles.questionView}>
        <h2>{viewQuestion.title}</h2>
        <p>{viewQuestion.description}</p>
        <input className={styles.ans}></input>
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
