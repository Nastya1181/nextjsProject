import styles from "../../styles/global.module.scss";
import Radio from "./Radio";
import { useState } from "react";

export default function RadioButton(props) {
  function onClick(event) {
  props.setSelected(props.id);
}
  return (
    <div
      className={`${styles.radioButton}  ${props.checked ? styles.checked : ""}  ${props.disabled ? styles.disabled : ""}`}
      onClick={onClick}
    >
      <Radio checked={props.checked} disabled={props.disabled} name={props.name}/>
      <label>{props.text}</label>
    </div>
  );
}
