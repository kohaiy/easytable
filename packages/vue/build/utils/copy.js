const { resolve } = require('node:path')
const { copy, readdir } = require('fs-extra')

module.exports = async function () {
  return Promise.all([
    handleIconfont(),
    handleTheme(),
    handleLang(),
  ])
}

async function handleIconfont() {
  const ICONFONT_DIR = resolve(__dirname, '../../../font')
  const DEST_DIR = resolve(__dirname, '../../libs/font')
  await copy(ICONFONT_DIR, DEST_DIR)
}

async function handleLang() {
  const LANG_DIR = resolve(__dirname, '../../../common/locale/types.d.ts')
  const DEST_DIR = resolve(__dirname, '../../libs/locale/types.d.ts')
  await copy(LANG_DIR, DEST_DIR)
}

async function handleTheme() {
  const BASE_DIR = resolve(__dirname, '../../..')
  const DEST_DIR = resolve(__dirname, '../../libs/packages')
  await Promise.all(
    [
      'theme-default',
      'theme-dark',
      'style',
      'font',
    ].map(dir =>
      copy(resolve(BASE_DIR, dir), resolve(DEST_DIR, dir)),
    ),
  )
}
