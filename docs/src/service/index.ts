// get versions
export function getVersions() {
  return new Promise((resolve, reject) => {
    const net = window.location

    let url = `${net.protocol}//${net.hostname}:${net.port}`

    url += __VERSIONS_BASE_URL__ ?? ''

    url += `/versions.json?t=${new Date().getTime()}`

    fetch(url)
      .then(res => res.json())
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
