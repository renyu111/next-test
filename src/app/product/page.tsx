import Link from "next/link";

export default function Product() {
  return (
    <Link href={"/product/1"} className="text-3xl font-bold underline">
      Product
    </Link>
  )
}