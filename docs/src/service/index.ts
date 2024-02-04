// get versions
export function getVersions() {
  return new Promise((resolve, reject) => {
    const net = window.location

    let url = `${net.protocol}//${net.hostname}:${net.port}`

    url += import.meta.env.VITE_BASE_URL ?? ''

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
