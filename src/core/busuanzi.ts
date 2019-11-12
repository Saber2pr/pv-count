/*
 * @Author: saber2pr
 * @Date: 2019-11-12 14:37:39
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-11-12 14:37:39
 */
import { jsonp } from "./jsonp"

export type BusuanziResponse = {
  site_uv: number
  page_pv: number
  version: number
  site_pv: number
}

export const visit = () =>
  jsonp<BusuanziResponse>(
    "//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback_"
  )
