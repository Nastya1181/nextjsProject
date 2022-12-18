import styles from "../../styles/global.module.scss";

//При желании можно было объединить с Check, добавив prop с типом кнопки
export default function Radio(props) {
  return (
    <input
      className={`${styles.radio} ${props.isChecked? styles.radio_checked: ''}`}
      type="radio"
      disabled={props.disabled}
    />
  );
}
