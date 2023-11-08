import Link from "next/link";

export default function ProductId({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Link href={"/product"}>{id}</Link>
      {Array.from({ length: 10 }).map((_, i) => (
        <Link
          style={{
            display: "block",
            marginBottom: "10px",
          }}
          href={`/product/${id}/review/${i + 1}`}
          // href={{
          //   pathname: "/product/[id]/review/[reviewId]",
          //   query: {
          //     id,
          //     reviewId: String(i + 1),
          //   },
          // }}
        >
          第{i + 1}条评论
        </Link>
      ))}
    </div>
  );
}
