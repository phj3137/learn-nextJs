import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-credit.module.css";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`, {});
  return response.json();
}

export default async function Credits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div>
      {credits.map((credit) => (
        <div className={styles.container}>
          <img
            className={styles.img}
            src={credit.profile_path}
            alt={credit.name}
          />
          <div>
            <h1 className={styles.title}>{credit.known_for_department}</h1>
            <h1 className={styles.name}>{credit.name}</h1>
          </div>
          <div>
            <h1 className={styles.title}>Role</h1>
            <h2 className={styles.name}>{credit.character}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
