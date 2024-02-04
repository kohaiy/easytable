const { resolve } = require('node:path')
const { writeFile, readFile } = require('fs-extra')

module.exports = async function () {
  await Promise.all([
    replaceTs(),
  ])
}

async function replaceTs() {
  const FILEPATH = resolve(__dirname, '../../libs/index.d.ts')
  const str = await readFile(FILEPATH).then(res => res.toString())
  await writeFile(FILEPATH, str.replace(/@easytable/g, './packages'), { encoding: 'utf8' })
}
