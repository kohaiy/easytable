// get versions
export function getVersions() {
  return new Promise((resolve, reject) => {
    const net = window.location

    // eslint-disable-next-line node/prefer-global/process
    const isDev = process.env.NODE_ENV === 'development'

    let url = `${net.protocol}//${net.hostname}:${net.port}`

    // 包含 /vue-easytable/ 目录
    if (!isDev)
      url += '/vue-easytable'

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
