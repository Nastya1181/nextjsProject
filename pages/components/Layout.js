import styles from "../../styles/global.module.scss";
import Head from "next/head";
import Icon from "./Icon";
import Image from "next/image";
import TasksContainer from "./TasksContainer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Layout(props) {
  const [testInfo, setTestInfo] = useState(null);
  const router = useRouter();

  const getTest = async () => {
    let response = await fetch("/api/getTestInfo", {
      method: "POST",
      body: router?.query.Task[0]
    });

    if (response.ok) {
      let testInfo = await response.json();
      setTestInfo(testInfo);
    }
  };

  useEffect(() => {
    getTest();
  }, []);

    return (
        <div className={styles.container}>
        <Head>
          <title>Тесты</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <div className={styles.header__icons}>
            <Icon text={`${router?.query.Task[1]}/20`} src='/imgs/questions.svg'/>
            <Icon text={`${testInfo?.duration}`} src='/imgs/time.svg'/>
          </div>
          <div className={styles.subtitle}>{testInfo?.name}</div>
          <div className={styles.logo}><Image  src={'/imgs/logo.svg'} height={64} width={64} /></div>
        </header>
        <aside className={styles.aside}>
          <TasksContainer testId={router?.query.Task[0]} tasks={testInfo?.tasks}/>
        </aside>
        <main className={`${styles.main}`}>
            { props.children }
        </main>
      </div>
    );
}
