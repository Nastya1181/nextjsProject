import styles from "../../styles/global.module.scss";
import Radio from "./Radio";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function RadioButton(props) {
  const router = useRouter();

  function onClick(event) {
    props.setSelected(props.id);
  }
  useEffect(() => props.setSelected(null), [router.query.Task[1]]);
  return (
    <div
      className={`${styles.radioButton}  ${
        props.isChecked ? styles.checked : ""
      }  ${props.disabled ? styles.disabled : ""}`}
      onClick={onClick}
    >
      <Radio
        isChecked={props.isChecked}
        disabled={props.disabled}
        name={props.name}
      />
      <label>{props.text}</label>
    </div>
  );
}
