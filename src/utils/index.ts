import { router } from '@/router'
import type { RouteLocationRaw } from 'vue-router'

// 判断设备类型
export function isMobileDevice() {
  var userAgent = navigator.userAgent || navigator.vendor

  // 移动设备判断关键字
  var isMobile = /Mobile|iPad|iPhone|iPod|Android|BlackBerry|Windows Phone|Opera Mini|IEMobile|Silk/i.test(userAgent)

  return isMobile
}

export const jumpTo = (route: RouteLocationRaw) => {
  window.scrollTo({ top: 0 })
  router.push(route)
}

// export function isMobileDevice() {
//   const width = window.innerWidth
//   return width <= 768
// }
