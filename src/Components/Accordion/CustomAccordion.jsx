/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./CustomAccordion.module.css";
import  UpArrow from "../../assets/upArrow.svg?react";
import  DownArrow from "../../assets/downArrow.svg?react";

const CustomAccordion = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const { question, answer } = data;
  return (
    <div className={styles.wrapper}>
      <div className={styles.questionWrapper}>
        <h3>{question}</h3>
        <p onClick={handleClick}>{show ? <UpArrow /> : <DownArrow />}</p>
      </div>
      {show && <p className={styles.answerWrapper}>{answer}</p>}
    </div>
  );
};

export default CustomAccordion;