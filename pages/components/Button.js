import { useRouter } from "next/router";
import styles from "../../styles/global.module.scss";

export default function Button(props) {
  const router = useRouter();
  return (
    <input
      className={styles.button}
      type="button"
      disabled={props.disabled}
      value={props.text.toUpperCase()}
      onClick={() => { router.push(`/test/${props.next}`)}}
    />
  );
}
