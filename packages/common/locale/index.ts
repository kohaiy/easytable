import locale from '@easytable/ve-locale'
import { isFunction } from '../utils/index'
import type { LocaleMessage } from './types'

/*
 * @createI18N
 * @desc create i18n
 * @param {string} compName
 * @return {array<function>}
 */
export function createI18N(compName: keyof LocaleMessage) {
  return function (path: string, ...args: any[]) {
    let result = ''

    const messages = locale.getMessage()

    if (messages[compName]) {
      const message = messages[compName][path]
      result = isFunction(message) ? message(...args) : message
    }
    else {
      console.error(
        `can't find ${compName} in ${JSON.stringify(messages)}`,
      )
    }

    return result
  }
}
