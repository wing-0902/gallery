import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // レイアウトが同じ場合スクロールしない
    if (to.meta.layout === from.meta.layout) {
      return false 
    }

    // それ以外トップへ
    return savedPosition || { top: 0 }
  }
}
