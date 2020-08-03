import React from "react";
import { QuestionList, QuestionView } from "../";
import styles from "./Questions.module.css";
// import { GlobalContext } from "../../store/GlobalState";

function Questions() {
//   const { questions } = useContext(GlobalContext);

  return (
      //sending question array to QuestionList
      //sending changehandler to question via QuestionList
    <div className={styles.questions}>
      <QuestionList />
      <QuestionView />
    </div>
  );
}

export default Questions;
