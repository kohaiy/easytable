const { resolve } = require('node:path')
const { writeFile, readFile } = require('fs-extra')

const DIR = resolve(__dirname, '../../../_build_gh_pages')

async function deployGh() {
  const version = await getVersion()
  const str = (await readFile(resolve(__dirname, './check-docs-version.js'))).toString()
  await writeFile(resolve(DIR), str.replace('##VERSION##', version), { encoding: 'utf8' })
}
async function getVersion() {
  const str = (await readFile(resolve(__dirname, '../../../packages/vue/package.json'))).toString()
  return JSON.parse(str).version
}

deployGh()
