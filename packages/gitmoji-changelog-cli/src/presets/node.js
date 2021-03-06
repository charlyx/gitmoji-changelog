const readPkgUp = require('read-pkg-up')

module.exports = async () => {
  try {
    const packageInfo = await readPkgUp()

    if (!packageInfo.pkg) throw Error('Empty package.json')

    return {
      name: packageInfo.pkg.name,
      version: packageInfo.pkg.version,
      description: packageInfo.pkg.description,
    }
  } catch (e) {
    return null
  }
}
