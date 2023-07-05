import { useContext } from "react";

import { TasksContext, DisplayModeContext } from "../../hooks/TaskContext";

import styles from "./footer.module.css";

const Footer = () => {
  const { tasks, dispatch } = useContext(TasksContext);
  const { setDisplayMode } = useContext(DisplayModeContext);

  function handlerClear() {
    dispatch({
      type: "CLEAR",
    });
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.total}>{tasks.length} left</div>
      <ul className={styles.view_buttons}>
        <button onClick={() => setDisplayMode("ALL")}>ALL</button>
        <button onClick={() => setDisplayMode("ACTIVE")}>Active</button>
        <button onClick={() => setDisplayMode("COMPLETED")}>Completed</button>
      </ul>
      <div className={styles.clean}>
        <button onClick={handlerClear}>Clear completed</button>
      </div>
    </footer>
  );
};

export default Footer;
