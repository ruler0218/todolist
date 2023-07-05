import { useContext } from "react";
import { TasksContext, TasksDispatchContext } from "../../hooks/TaskContext";

import styles from "./todo.module.css";

import images from "../../assets/x.png";

const Todo = () => {
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);

  function handleRemove(e) {
    console.log(e.target.parentElement.firstChild.firstChild.id);
    dispatch({
      type: "deleted",
      id: e.target.parentElement.firstChild.firstChild.id,
    });
  }
  return (
    <>
      {tasks.map((task) => (
        <li className={styles.item} key={task.id}>
          <div className={styles.checkbox}>
            <input type="checkbox" id={task.id} />
            <label htmlFor={task.id}></label>
          </div>
          <h1 className={styles.item_detail}>{task.text}</h1>
          <img src={images} className={styles.item_x} alt="" onClick={handleRemove} />
        </li>
      ))}
    </>
  );
};

export default Todo;
