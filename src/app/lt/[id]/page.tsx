
async function getData():Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
    }, 4000)
  })
}


export default async function LtPage() {

  const res = await getData()

  return (
    <div>Ltpage-{res}</div>
  )
}