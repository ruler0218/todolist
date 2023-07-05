import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { TasksDispatchContext } from "../../hooks/TaskContext";

import styles from "./input.module.css";

const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  function handleSubmit(e) {
    e.preventDefault();
    setText("");
    dispatch({
      type: "added",
      id: uuidv4(),
      text: text,
    });
  }
  return (
    <form
      action=""
      className={styles.form}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input type="text" className={styles.input} placeholder="done?" onChange={(e) => setText(e.target.value)} value={text} />
    </form>
  );
};

export default Input;
