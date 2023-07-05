import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="todo-footer">
      <div className={styles.total}>{1} left</div>
      <ul className={styles.view_buttons}>
        <button>ALL</button>
        <button>Active</button>
        <button>Completed</button>
      </ul>
      <div className={styles.clean}>
        <button>Clear completed</button>
      </div>
    </footer>
  );
};

export default Footer;
