import Cookies from 'js-cookie'

import { DOC_THEME_COOKIE } from './constant'

// set doc theme cookie
export function setDocTheme(value: string) {
  return Cookies.set(DOC_THEME_COOKIE, value)
}

// get doc theme cookie
export function getDocTheme() {
  const result = Cookies.get(DOC_THEME_COOKIE)
  return result
}
