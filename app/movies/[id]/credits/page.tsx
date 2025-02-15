import Credits from "../../../../components/movie-credits";

export const metadata = {
  title: "Credits",
};

type IParams = Promise<{
  id: string;
}>;

export default async function MovieCredits(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  return (
    <div>
      <Credits id={id} />
    </div>
  );
}
