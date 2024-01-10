/**
 * autoResize - resizes a DOM element to the width and height of another DOM element
 *
 * Copyright 2014, Marcin Warpechowski
 * Licensed under the MIT license
 * refer to https://github.com/handsontable/handsontable/blob/HEAD/handsontable/src/3rdparty/autoResize/index.js
 */

export function autoResize() {
  const defaults = {
    minHeight: 200,
    maxHeight: 300,
    minWidth: 100,
    maxWidth: 300,
    // text padding
    paddingWidth: 16,
  }
  let el
  const body = document.body
  const text = document.createTextNode('')
  const span = document.createElement('SPAN')
  const observe = function (element, event, handler) {
    element.addEventListener(event, handler, false)
  }
  const unObserve = function (element, event, handler) {
    element.removeEventListener(event, handler, false)
  }
  const resize = function (newChar) {
    if (!newChar)
      newChar = ''
    else if (!/^[a-zA-Z \.,\\\/\|0-9]$/.test(newChar))
      newChar = '.'

    if (text.textContent !== void 0)
      text.textContent = el.value + newChar
    else
      text.data = el.value + newChar // IE8

    span.style.fontSize = getComputedStyle(el).fontSize
    span.style.fontFamily = getComputedStyle(el).fontFamily
    span.style.whiteSpace = 'pre'

    body.appendChild(span)
    const width = span.clientWidth + defaults.paddingWidth
    body.removeChild(span)

    el.style.height = `${defaults.minHeight}px`

    if (defaults.minWidth > width)
      el.style.width = `${defaults.minWidth}px`
    else if (width > defaults.maxWidth)
      el.style.width = `${defaults.maxWidth}px`
    else
      el.style.width = `${width}px`

    const scrollHeight = el.scrollHeight ? el.scrollHeight - 1 : 0

    if (defaults.minHeight > scrollHeight) {
      el.style.height = `${defaults.minHeight}px`
    }
    else if (defaults.maxHeight < scrollHeight) {
      el.style.height = `${defaults.maxHeight}px`
      el.style.overflowY = 'visible'
    }
    else {
      el.style.height = `${scrollHeight}px`
    }
  }
  const delayedResize = function () {
    window.setTimeout(resize, 0)
  }
  const extendDefaults = function (config) {
    if (config && config.minHeight) {
      if (config.minHeight === 'inherit') {
        defaults.minHeight = el.clientHeight
      }
      else {
        const minHeight = Number.parseInt(config.minHeight)
        if (!Number.isNaN(minHeight))
          defaults.minHeight = minHeight
      }
    }

    if (config && config.maxHeight) {
      if (config.maxHeight === 'inherit') {
        defaults.maxHeight = el.clientHeight
      }
      else {
        const maxHeight = Number.parseInt(config.maxHeight)
        if (!Number.isNaN(maxHeight))
          defaults.maxHeight = maxHeight
      }
    }

    if (config && config.minWidth) {
      if (config.minWidth === 'inherit') {
        defaults.minWidth = el.clientWidth
      }
      else {
        const minWidth = Number.parseInt(config.minWidth)
        if (!Number.isNaN(minWidth))
          defaults.minWidth = minWidth
      }
    }

    if (config && config.maxWidth) {
      if (config.maxWidth === 'inherit') {
        defaults.maxWidth = el.clientWidth
      }
      else {
        const maxWidth = Number.parseInt(config.maxWidth)
        if (!Number.isNaN(maxWidth))
          defaults.maxWidth = maxWidth
      }
    }

    if (!span.firstChild) {
      span.className = 'autoResize'
      span.style.display = 'inline-block'
      span.appendChild(text)
    }
  }
  const init = function (el_, config, doObserve) {
    el = el_
    extendDefaults(config)

    if (el.nodeName === 'TEXTAREA') {
      el.style.resize = 'none'
      el.style.overflowY = ''
      el.style.height = `${defaults.minHeight}px`
      el.style.minWidth = `${defaults.minWidth}px`
      el.style.maxWidth = `${defaults.maxWidth}px`
      el.style.overflowY = 'hidden'
    }

    if (doObserve) {
      observe(el, 'change', resize)
      observe(el, 'cut', delayedResize)
      observe(el, 'paste', delayedResize)
      observe(el, 'drop', delayedResize)
      observe(el, 'keydown', delayedResize)
      observe(el, 'focus', resize)
      observe(el, 'compositionstart', delayedResize)
      observe(el, 'compositionupdate', delayedResize)
      observe(el, 'compositionend', delayedResize)
    }

    resize()
  }

  function getComputedStyle(element) {
    return (
      element.currentStyle
      || document.defaultView.getComputedStyle(element)
    )
  }

  return {
    init(el_, config, doObserve) {
      init(el_, config, doObserve)
    },
    unObserve() {
      if (!el)
        return false

      unObserve(el, 'change', resize)
      unObserve(el, 'cut', delayedResize)
      unObserve(el, 'paste', delayedResize)
      unObserve(el, 'drop', delayedResize)
      unObserve(el, 'keydown', delayedResize)
      unObserve(el, 'focus', resize)
      unObserve(el, 'compositionstart', delayedResize)
      unObserve(el, 'compositionupdate', delayedResize)
      unObserve(el, 'compositionend', delayedResize)
    },
    resize,
  }
}
