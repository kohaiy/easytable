/*
fork from:
https://github.com/ElemeFE/element
*/

import ResizeObserver from 'resize-observer-polyfill'

// TODO
/* istanbul ignore next */
const resizeHandler = function (entries: any) {
  for (const entry of entries) {
    const listeners: any = entry.target.__resizeListeners__ || []
    if (listeners.length) {
      listeners.forEach((fn: any) => {
        fn(entry.contentRect)
      })
    }
  }
}

/* istanbul ignore next */
export const addResizeListener = function (element: HTMLElement & Record<string, any>, fn: Function) {
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = []

    element.__ro__ = new ResizeObserver(resizeHandler)
    element.__ro__.observe(element)
  }
  element.__resizeListeners__.push(fn)
}

/* istanbul ignore next */
export const removeResizeListener = function (element: HTMLElement & Record<string, any>, fn: Function) {
  if (!element || !element.__resizeListeners__)
    return
  element.__resizeListeners__.splice(
    element.__resizeListeners__.indexOf(fn),
    1,
  )
  if (!element.__resizeListeners__.length)
    element.__ro__.disconnect()
}
