export default function delayFun(time:number):Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok")
    }, time)
  })

}