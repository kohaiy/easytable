const versions = require('../docs/dist/versions.json')

const version = '##VERSION##'

function checkVersion(version = '', docVersions = []) {
  const [lastVer] = docVersions.map(({ value }) => value)
  if (version === lastVer)
    return
  if (lastVer) {
    const [major, minor] = version.split('.')
    const [major2, minor2] = lastVer.split('.')
    if (major === major2 && minor === minor2)
      return
  }

  docVersions.unshift({ label: version, value: version })
}

checkVersion(version, versions)
