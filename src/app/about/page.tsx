export async function generateStaticParams() {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
  ];
}

export default function About(props: any) {
  console.log(props);

  return <h1 className="text-3xl font-bold underline">About</h1>;
}
