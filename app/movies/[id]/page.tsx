import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

type IParams = Promise<{
  id: string;
}>;

/*
interface IParams {
  params: { id: string };
}
*/
export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  return {
    title: id,
  };
}

export default async function MovieDetail(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
