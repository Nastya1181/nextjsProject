import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../../styles/global.module.scss";

/* Круговой таймер
   TODO: доработать так, чтобы не сбрасывался при обновлении страницы */
export default function Timer(props) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        isPlaying
        duration={props.duration}
        colors={["#00EAD9"]}
        size={120}
        strokeWidth={2}
      >
        {({ remainingTime }) => {
          const minutes = Math.floor((remainingTime % 3600) / 60);
          const seconds = remainingTime % 60;
          return `${minutes < 10 ? `0${minutes}` : minutes}:${
            seconds === 0 ? `0${seconds}` : seconds
          }`;
        }}
      </CountdownCircleTimer>
    </div>
  );
}
