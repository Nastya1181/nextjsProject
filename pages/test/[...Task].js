import styles from "../../styles/global.module.scss";

import AnswersContainer from "../components/AnswersContainer";
import Button from "../components/Button";
import Timer from "../components/Timer";
import Image from "next/image";
import { useEffect, useState } from "react";

/* Cтраница с заданием (получение данных через getServerSideProps)
   Получение данных через FETCH можно посмотреть в компоненте LAYOUT */
export default function Task(props) {
  const [selected, setSelected] = useState(null);
  const task = JSON.parse(props.task);

  useEffect(() => {
    setSelected(null);
  }, []);

  return (
    <>
      <div className={styles.gradient}></div>
      <div className={styles.taskContainer}>
        {task?.hasTimer && <Timer duration={task.timeMs} />}
        {task?.type === "image" && (
          <div className={styles.imageContainer}>
            <Image
            className={styles.taskImage}
            src={task?.url}
            width={600}
            height={400}
          />
          </div>
          
        )}
        <div className={styles.taskText}>{task?.question}</div>
        <AnswersContainer
          answers={task?.answers}
          selected={selected}
          setSelected={setSelected}
        />
        <div className={styles.buttons}>
          {task.isSkippable && (
          <Button
            text="Пропустить"
            disabled={false}
            taskId={props.taskId}
            testId={props.testId}
            answer={selected}
            isSkippable={true}
            isLast={props.isLast}
          />
        )}
        {task && (
          <Button
            text="ответить"
            disabled={!selected}
            taskId={props.taskId}
            testId={props.testId}
            answer={selected}
            isLast={props.isLast}
          />
        )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  var mongo = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017/";
  const filter = {
    testId: Number(query.Task[0]),
    taskId: Number(query.Task[1])
  };
  let task;
  let lastTaskId;

  try {
    const db = await mongo.connect(url);
    task = await db.db("testSystem").collection("tests").findOne(filter);
    let tasks = await db.db("testSystem").collection("tests").find({testId: Number(query.Task[0])}).toArray();
    lastTaskId = tasks.pop().taskId;
    db.close();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      testId: Number(query.Task[0]),
      taskId: Number(query.Task[1]),
      task: JSON.stringify(task),
      isLast: task?.taskId === lastTaskId
    },
  };
}
