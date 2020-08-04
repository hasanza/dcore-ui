import React from "react";
import { QuestionList, QuestionView } from "../";
import styles from "./Questions.module.css";


function Questions() {

  return (

    <div className={styles.questions}>
      <QuestionList />
      <QuestionView />
    </div>
  );
}

export default Questions;
