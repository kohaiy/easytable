const { resolve } = require('node:path')
const { exec } = require('node:child_process')
const { move, copyFile, writeFile, readFile, remove } = require('fs-extra')

async function handlePublish() {
  await move(resolve(__dirname, '../package.json'), resolve(__dirname, '../_package.json'))
  const pkg = await readFile(resolve(__dirname, '../_package.json'))
    .then(res => res.toString())
    .then(res => JSON.parse(res))
  ;[
    'scripts',
    'dependencies',
    'devDependencies',
  ].forEach((key) => {
    delete pkg[key]
  })
  await writeFile(resolve(__dirname, '../package.json'), JSON.stringify(pkg, null, 2), { encoding: 'utf8' })

  await new Promise((resolve) => {
    exec('npm publish', (err) => {
      if (err)
        console.error(err)

      resolve()
    })
  })
  await copyFile(resolve(__dirname, '../../../README.md'), resolve(__dirname, '../README.md'))
  await remove(resolve(__dirname, '../package.json'))
  await move(resolve(__dirname, '../_package.json'), resolve(__dirname, '../package.json'))
}

handlePublish()
