import styles from "../../styles/global.module.scss";

export default function Button(props) {
  return (
    <input
      className={styles.button}
      type="button"
      disabled={props.disabled}
      value={props.text.toUpperCase()}
    />
  );
}
