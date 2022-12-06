import styles from "../../styles/global.module.scss";
import Image from "next/image";

export default function Icon(props) {
  return (
    <div className={styles.iconContainer}>
      <Image align="middle" className={styles.icon} src={props.src} width={48} height={48}/>
      <div className={styles.iconText}>{props.text}</div>
    </div>
  );
}
