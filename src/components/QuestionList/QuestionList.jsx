import React, { useContext } from "react";
import styles from "./QuestionList.module.css";
import { Question } from "../";
import { GlobalContext } from "../../store/GlobalState";
import Fade from "react-reveal";

function QuestionList() {
  const { currentProject } = useContext(GlobalContext);
  const questions = currentProject.data.questions;
  console.log(currentProject.name);
  console.log(questions[0].title);
  if (questions[0].title !== "Welcome") {
    return (
      //for each question, render a Question component. Access questions
      //array stored in the global context store.

      <div className={styles.questionList}>
        {questions.map((question, index) => (
          <Question question={question} key={index} />
        ))}
      </div>
    );
  } else
    return (
      <div className={styles.welcome}>
        <Fade bottom>
          <h2>Please select a project</h2>
        </Fade>
      </div>
    );
}

export default QuestionList;
