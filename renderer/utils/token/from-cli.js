// Packages
import electron from 'electron'

// Utilities
import tokenValidated from './validate'

export default async root => {
  const remote = electron.remote || false

  if (!remote) {
    return
  }

  const { get: getConfig, remove: removeConfig } = remote.require(
    './utils/config'
  )
  window.sliderElement = root

  let config

  try {
    config = await getConfig()
  } catch (err) {
    return
  }

  if (!config.token) {
    return
  }

  if (!await tokenValidated(config.token)) {
    await removeConfig()
    return
  }

  root.setState({
    loginShown: false,
    loginText: `You've already signed in once in the now CLI.\nBecause of this, you've now been logged in automatically.`
  })
}
