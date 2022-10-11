import { useState } from "react";
import styles from "../../styles/global.module.scss";

//При желании можно было объединить с Radio, добавив prop с типом кнопки
export default function Check(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  function onChange() {
    setIsChecked(!isChecked);
  }

  return (
    <input
      className={styles.check}
      type="checkbox"
      disabled={props.disabled}
      checked={isChecked}
      onChange={onChange}
    />
  );
}
