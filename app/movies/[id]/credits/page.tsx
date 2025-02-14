import Credits from "../../../../components/movie-credits";

export const metadata = {
  title: "Credits",
};

export default async function MovieCredits({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Credits id={id} />
    </div>
  );
}
