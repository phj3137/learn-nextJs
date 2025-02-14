import styles from "../styles/movie-similar.module.css";

interface IMoiveProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function SimilarMovie({ title, id, poster_path }: IMoiveProps) {
  return (
    <div>
      <img className={styles.img} src={poster_path} alt={title} />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
