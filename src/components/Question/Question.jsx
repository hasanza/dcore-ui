import React, { useContext, useState } from "react";
import styles from "./Question.module.css";
import { GlobalContext } from "../../store/GlobalState";
import {FaClock} from 'react-icons/fa'

function Question({ question }) {
  const [q, setQ] = useState(question);
  const { setViewQuestion } = useContext(GlobalContext);

  const onChange = () => {
    setViewQuestion(q);
  };

  return (
    //get data as prop from QuestionList and display it
    //onClick, tringer common parent state change who sends it to sibling
    <div className={styles.question} onClick={onChange}>
      <h3>{question.title}</h3>
      <div className={styles.details}>
        <p className={styles.questionClass}>{question.class}</p>
        
        <p className={styles.time}>
            <FaClock style={{}}/>
          <span style={{marginLeft: "5px", marginBottom: "5px"}}>{question.time} min</span>
        </p>
      </div>
    </div>
  );
}

export default Question;
