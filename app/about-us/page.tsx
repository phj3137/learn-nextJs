import Link from "next/link";
import styles from "../../styles/about-us.module.css";

export const metadata = {
  title: "About us",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Created by Next.js </h1>
      <Link href={"https://github.com/phj3137/learn-nextJs"}>
        Wanna see my Source Code? →
      </Link>
    </div>
  );
}
