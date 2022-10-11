import styles from "../../styles/global.module.scss";
import Radio from "./Radio";
import { useState } from "react";

export default function RadioButton(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  function onClick() {
    setIsChecked(!isChecked);
  }

  return (
    <div
      className={`${styles.radioButton}  ${isChecked ? styles.checked : ""}  ${props.disabled ? styles.disabled : ""}`}
      onClick={onClick}
    >
      <Radio id="rad" checked={isChecked} disabled={props.disabled} />
      <label for="rad">{props.text}</label>
    </div>
  );
}
