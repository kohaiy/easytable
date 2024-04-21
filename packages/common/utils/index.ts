import { createI18N } from '../locale/index'

/*
 * @createLocale
 * @desc create namespace by comp name
 * @param {string} compName
 * @return {function}
 */
export function createLocale(compName: string) {
  return createI18N(compName)
}

/*
 * @isEmptyArray
 * @desc  is empty array
 * @param {array} arr
 */
export function isEmptyArray(arr) {
  return !(Array.isArray(arr) && arr.length > 0)
}

/*
 * @isEmptyValue
 * @desc  is empty value
 * @param {array} arr
 */
export function isEmptyValue(value) {
  return !(value !== '' && value !== undefined && value !== null)
}

/*
 * @isDefined
 * @desc is defined
 * @param {any} val
 */
export function isDefined(val) {
  return val !== undefined && val !== null
}

/*
 * @isObject
 * @desc is object
 * @param {any} val
 */
export function isObject(val) {
  return val !== null && typeof val === 'object'
}

/*
* @isFunction
* @desc is function
* @param {any} val
*/
export function isFunction(val: any): val is Function
export function isFunction(val: any) {
  return (typeof val === 'function')
}

/*
 * @isBoolean
 * @desc is boolean
 * @param {any} val
 */
export function isBoolean(val) {
  return typeof val === 'boolean'
}

/*
 * @isNumber
 * @desc is number
 * @param {any} val
 */
export function isNumber(val) {
  return typeof val === 'number'
}

/*
 * @isTrue
 * @desc is equal true
 * @param {any} val
 */
export function isTrue(val) {
  return isBoolean(val) && val
}

/*
 * @isFalse
 * @desc is equal false
 * @param {any} val
 */
export function isFalse(val) {
  return isBoolean(val) && !val
}

/*
 * @getValByUnit
 * @desc  get value by unit
 * @param {number|string} width - 宽度
 */
export function getValByUnit(width: number | string) {
  return typeof width === 'number' ? `${width}px` : width
}

/*
 * @scrollTo
 * @desc element scrollTo https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo
 * @param {element} el - element
 * @param {object} option - scroll option
 */
export function scrollTo(el, option) {
  if (isFunction(el.scrollTo)) {
    el.scrollTo(option)
  }
  else {
    const { top, left } = option
    el.scrollTop = top
    el.scrollLeft = left
  }
}

export function getTextContentOfVNode(vNode: any): string {
  if (!vNode)
    return ''
  if (typeof vNode === 'string')
    return vNode

  if (Array.isArray(vNode))
    return vNode.map(item => getTextContentOfVNode(item)).join('')

  if (vNode.children)
    return getTextContentOfVNode(vNode.children)

  return ''
}
