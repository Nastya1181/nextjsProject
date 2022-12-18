import { useRouter } from "next/router";
import styles from "../../styles/global.module.scss";

export default function Button(props) {
  const router = useRouter();
  const sendResult = async() => {
    let locStAnswers = localStorage.getItem('answers');
    const currentAnswer = props.isSkippable? 0: props.answer;
    const answers = locStAnswers? {...JSON.parse(locStAnswers),  [props.taskId]: currentAnswer}: {[props.taskId]: currentAnswer};
    localStorage.setItem('answers', JSON.stringify(answers));
    
    const bodyJSON = JSON.stringify({'testId': props.testId, 'answers': answers});
    let res = await fetch("/api/sendResult", {
      method: 'POST',
      body: bodyJSON
    });

    if (res) {
      router.push(props.isLast? `/result/${props.testId}`: `/test/${props.testId}/${1 + +props.taskId}`);
    }
  }

  return (
    <input
      className={`${props.isSkippable? styles.skipButton: styles.button}`}
      type="button"
      disabled={props.disabled}
      value={props.text.toUpperCase()}
      onClick={async() => sendResult()}
    />
  );
}
