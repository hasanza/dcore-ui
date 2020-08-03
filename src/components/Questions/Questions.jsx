import React, {useContext} from "react";
import { QuestionList, QuestionView } from "../";
import styles from "./Questions.module.css";
 import { GlobalContext } from "../../store/GlobalState";

function Questions() {

const {currentProject} = useContext(GlobalContext);

// console.log(currentProject);

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
