export default function ReviewId({
  params: { id, reviewId },
}: {
  params: { id: string; reviewId: string };
}) {
  return (
    <div>
      <h1>
        {id}-{reviewId}
      </h1>
    </div>
  );
}
