/*
fork from:
https://github.com/bvaughn/react-virtualized/blob/HEAD/source/utils/animationFrame.js
*/

// Properly handle server-side rendering.
let win: any
if (typeof window !== 'undefined')
  win = window

else if (typeof globalThis !== 'undefined')
  win = globalThis

else
  win = {}

// requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
const request: typeof requestAnimationFrame
    = win.requestAnimationFrame
    || win.webkitRequestAnimationFrame
    || win.mozRequestAnimationFrame
    || win.oRequestAnimationFrame
    || win.msRequestAnimationFrame
    || function (callback: Function) {
      return win.setTimeout(callback, 1000 / 60)
    }

const cancel: typeof cancelAnimationFrame
    = win.cancelAnimationFrame
    || win.webkitCancelAnimationFrame
    || win.mozCancelAnimationFrame
    || win.oCancelAnimationFrame
    || win.msCancelAnimationFrame
    || function (id: number) {
      win.clearTimeout(id)
    }

export const raf = request
export const caf = cancel
