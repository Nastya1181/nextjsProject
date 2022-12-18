import styles from "../../styles/global.module.scss";

export default function Test(props) {
  const answers = JSON.parse(props.answers);
  const getAnswerText = (currTask, answerId) => {
    const BDAnswer = currTask.answers.find((answer) => answer.id === answerId);
    return BDAnswer? BDAnswer.text: 'нет ответа';
  };
  return (
    <div className={styles.resultContainer}>
      <h1>
        <b>Результаты теста</b> {props.percent}%
      </h1>
      {JSON.parse(props.tasks).map((task) => (
        <div key={task.taskId}>
          <div className={styles.result}>
            {task.taskId}. {task.question}{" "}
          </div>
          <div>
            Ваш ответ:{" "}
            <span className={task.isCorrect ? styles.right : styles.wrong}>
              {getAnswerText(task, answers[task.taskId])}
            </span>
            {!task.isCorrect && (
              <div>Верный ответ: {getAnswerText(task, task.rightAnswer)}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  var mongo = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017/";
  const filter = {
    testId: Number(query.Test[0]),
  };

  const result = [];
  let rightCount = 0;
  let wrongCount = 0;
  let test;
  try {
    const db = await mongo.connect(url);
    test = await db
      .db("testSystem")
      .collection("results")
      .findOne(filter);

    const tasks = await db
      .db("testSystem")
      .collection("tests")
      .find(filter)
      .toArray();

    for (let task of tasks) {
      const isRight = task.rightAnswer == test.answers[task.taskId];
      if (isRight) {
        rightCount++;
      } else {
        wrongCount++;
      }
      result.push({
        ...task,
        isCorrect: isRight,
      });
    }
    db.close();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      tasks: JSON.stringify(result),
      answers: JSON.stringify(test.answers),
      percent: (rightCount / (rightCount + wrongCount)) * 100,
    },
  };
}
