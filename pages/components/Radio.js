import styles from "../../styles/global.module.scss";

//При желании можно было объединить с Check, добавив prop с типом кнопки
export default function Radio(props) {
  return (
    <input
      className={styles.radio}
      type="radio"
      disabled={props.disabled}
      checked={props.checked}
    />
  );
}
