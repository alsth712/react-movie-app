import styles from "../styles/Load.module.css";

// loading 화면
function Loading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.LoadBox}></div>
    </div>
  );
}

export default Loading;
