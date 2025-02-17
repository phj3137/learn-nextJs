import styles from "../../styles/about-us.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>{children}&copy; Next JS is great!</div>
  );
}
