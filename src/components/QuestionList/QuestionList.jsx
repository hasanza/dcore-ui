import React, { useContext } from "react";
import styles from "./QuestionList.module.css";
import { Question } from "../";
import { GlobalContext } from "../../store/GlobalState";
import Fade from "react-reveal/Fade";

function QuestionList() {
  const { questions } = useContext(GlobalContext);

  return (
    //for each question, render a Question component. Access questions
    //array stored in the global context store.

    <div className={styles.questionList}>
      {questions.map((question, index) => (
        <Fade bottom>
          <Question question={question} key={index} />
        </Fade>
      ))}
    </div>
  );
}

export default QuestionList;
