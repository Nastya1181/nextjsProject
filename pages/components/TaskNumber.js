import styles from "../../styles/global.module.scss";

export default function TaskNumber(props) {
  return (
    <div
      className={`${styles.taskNumber} ${
        props.answered ? styles.answeredTask : ""
      } ${props.current ? styles.currentTask : ""}`}
    >
      {props.number}
    </div>
  );
}
