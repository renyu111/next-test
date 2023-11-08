import Link from "next/link";

export default function ProductId({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Link id="show" style={{
        display: "block",
      }} href={"/product"}>{id}</Link>
      {Array.from({ length: 10 }).map((_, i) => (
        <Link
        id={`show${i}`}
          style={{
            display: "block",
            marginBottom: "100vh",
          }}
          href={`/product/${id}/review/${i + 1}`}
        >
          第{i + 1}条评论
        </Link>
      ))}
    </div>
  );
}
