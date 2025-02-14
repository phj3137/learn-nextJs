import { API_URL } from "../../../(home)/page";
import SimilarMovie from "../../../../components/movie-similar";
import styles from "../../../../styles/movie-similar.module.css";

export const metadata = {
  title: "Similar Movies",
};

async function getSimliarMovies(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`, {});
  return response.json();
}

export default async function Simliar({
  params: { id },
}: {
  params: { id: string };
}) {
  const similars = await getSimliarMovies(id);
  return (
    <div className={styles.div}>
      {similars.map((similar) => (
        <SimilarMovie
          key={similar.id}
          id={similar.id}
          poster_path={similar.poster_path}
          title={similar.title}
        />
      ))}
    </div>
  );
}
