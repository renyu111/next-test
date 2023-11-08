import delayFun from "../../../utils/delayFun"

export default async function Profile() {
  const res = await delayFun(4000)
  return (
    <h1 className="text-3xl font-bold underline">
      Profile-{res}
    </h1>
  )
}