/*
 * @Author: saber2pr
 * @Date: 2019-11-12 14:37:43
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-11-12 14:37:43
 */
export const jsonp = <T = any>(url: string): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    const script = document.createElement("script")
    const timestamp = Math.floor(1099511627776 * Math.random())
    const callbackId = url.split("=").pop() + timestamp
    script.src = url + timestamp
    script.async = true
    window[callbackId] = (result: T) => {
      delete window[callbackId]
      document.body.removeChild(script)
      result ? resolve(result) : reject("404: " + result)
    }
    script.addEventListener("error", () => reject("script create fail"))
    document.body.appendChild(script)
  })
