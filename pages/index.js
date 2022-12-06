import { useRouter } from "next/router";

/* SCSS еще будет дорабатываться по ходу выполнения проекта, 
пока просто скопировала из фигмы, не снижайте за это, пожалуйста */
export default function Home(props) {
  const router  = useRouter();
  if (typeof window !== 'undefined') {
    router.push('/task/1')
  }
}
