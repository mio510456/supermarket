import {request} from "./request";

// 数据来源地址
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 数据来源地址
export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}