import { useState, useEffect, useContext } from "react";
import { TasksContext, DisplayModeContext } from "../../hooks/TaskContext";

import styles from "./todo.module.css";

import images from "../../assets/x.png";

const Todo = () => {
  const { tasks, dispatch } = useContext(TasksContext);

  const { displayMode } = useContext(DisplayModeContext);

  const [task, setTask] = useState([]);

  useEffect(() => {
    if (displayMode == "ALL") {
      setTask(tasks);
    } else if (displayMode == "ACTIVE") {
      setTask(tasks.filter((task) => task.done == false));
    } else if (displayMode == "COMPLETED") {
      setTask(tasks.filter((task) => task.done == true));
    }
  }, [displayMode, tasks]);

  function handleRemove(id) {
    dispatch({
      type: "DELETE",
      id: id,
    });
  }

  function handleChange(id) {
    dispatch({
      type: "CHANGE",
      id: id,
    });
  }

  return (
    <>
      {task?.map((task) => (
        <li className={styles.item} key={task.id}>
          <div className={styles.checkbox}>
            <input type="checkbox" id={task.id} onChange={() => handleChange(task.id)} checked={task.done} />
            <label htmlFor={task.id}></label>
          </div>
          <h1 className={styles.item_detail}>{task.text}</h1>
          <img src={images} className={styles.item_x} alt="" onClick={() => handleRemove(task.id)} />
        </li>
      ))}
    </>
  );
};

export default Todo;
