import React, { useContext } from "react";
import styles from "./Question.module.css";
import { GlobalContext } from "../../store/GlobalState";
import { FaClock } from "react-icons/fa";
import Fade from "react-reveal/Fade";

function Question({ question }) {
  const { setViewQuestion } = useContext(GlobalContext);

  const onChange = () => {
    setViewQuestion(question);
    console.log("Q sent to view is", question.title);
  };

  return (
    <Fade bottom>
      <div
        className={styles.question}
        onClick={onChange}
      >
        <h3>{question.title}</h3>
        <div className={styles.details}>
          <p className={styles.questionClass}>{question.class}</p>

          <p className={styles.time}>
            <FaClock style={{}} />
            <span style={{ marginLeft: "3px", marginBottom: "2px" }}>
              {question.time} min
            </span>
          </p>
        </div>
      </div>
    </Fade>
  );
}

export default Question;
