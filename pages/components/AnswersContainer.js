import styles from "../../styles/global.module.scss";
import RadioButton from "./RadioButton";

export default function AnswersContainer(props) {
  const isSelected = (value) => props.selected === value;
 
  return (
    <div className={styles.answersContainer}>
      {props.answers?.map((answer) => (
        <RadioButton
          checked={isSelected(answer.id)}
          disabled={false}
          text={answer.text}
          setSelected={props.setSelected}
          id={answer.id}
          key={answer.id}
        />
      ))}
    </div>
  );
}
