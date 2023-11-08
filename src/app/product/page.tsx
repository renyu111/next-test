"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Product() {
  const path = usePathname();
  return (
    <Link href={"/product/1#show2"} className="text-3xl font-bold underline">
      Product-{path}
    </Link>
  )
}