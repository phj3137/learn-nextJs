import SimilarMovie from "../../../../components/movie-similar";
import styles from "../../../../styles/movie-similar.module.css";
import { API_URL } from "../../../constants";

export const metadata = {
  title: "Similar Movies",
};

type IParams = Promise<{
  id: string;
}>;

async function getSimliarMovies(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`, {});
  return response.json();
}

export default async function Simliar(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
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
