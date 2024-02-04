const { resolve } = require('node:path')
const { exec } = require('node:child_process')
const { move, copyFile, writeFile, readFile, remove } = require('fs-extra')

async function handlePublish() {
  const pkg = await readFile(resolve(__dirname, '../package.json'))
    .then(res => res.toString())
    .then(res => JSON.parse(res))
  const publishPkg = { ...pkg }
  ;[
    'scripts',
    'dependencies',
    'devDependencies',
  ].forEach((key) => {
    delete publishPkg[key]
  })
  const { version = '', docVersions = [] } = pkg
  checkVersion(version, docVersions)
  pkg.docVersions = docVersions

  await writeFile(resolve(__dirname, '../package.json'), JSON.stringify(publishPkg, null, 2), { encoding: 'utf8' })

  await new Promise((resolve) => {
    exec('npm publish', (err) => {
      if (err)
        console.error(err)

      resolve()
    })
  })
  await copyFile(resolve(__dirname, '../../../README.md'), resolve(__dirname, '../README.md'))
  await writeFile(resolve(__dirname, '../package.json'), `${JSON.stringify(pkg, null, 2)}\n`, { encoding: 'utf8' })

  await buildDocsVersion(docVersions)
}

function checkVersion(version = '', docVersions = []) {
  const [lastVer] = docVersions.map(({ value }) => value)
  if (version === lastVer)
    return
  if (lastVer) {
    const [major, minor] = version.split('.')
    const [major2, minor2] = lastVer.split('.')
    if (major === major2 && minor === minor2)
      docVersions.shift()
  }

  docVersions.unshift({ label: version, value: version })
}

async function buildDocsVersion(docVersions) {
  await writeFile(
    resolve(__dirname, '../../../docs/public/versions.json'),
    JSON.stringify(docVersions, null, 2),
  )
}

handlePublish()
