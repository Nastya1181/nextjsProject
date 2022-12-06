import styles from "../../styles/global.module.scss";
import TaskNumber from "./TaskNumber";
import Link from "next/link";

export default function TasksContainer(props) {
   return <div className={styles.tasksContainer}>{
    props?.tasks?.map((task) => <Link key={task.taskId} href={`/test/${props.testId}/${task.taskId}`}><a href={`/test/1/${task.taskId}`}><TaskNumber number={task.taskId} answered={true} current={false} /></a></Link>)
   }</div>
}