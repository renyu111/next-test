import { headers } from "next/headers"
export default function Home() {
  const headersList = headers();
  console.log(headersList.get('referer'));
  
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}