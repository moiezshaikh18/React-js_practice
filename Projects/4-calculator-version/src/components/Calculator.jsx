import React, { useState } from "react";
import styles from "../components/Calculator.module.css";

const Calculator = () => {
  const [value, setValue] = useState();

  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>calculator</h1>
      <input
        type="text"
        className={styles.display}
        onChange={handleChange}
        value={value}
      />
      <div className={styles["btn-container"]}>
        {buttonNames.map((btn, idx) => {
          return (
            <button className={styles.button} key={idx}>
              {btn}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Calculator;
