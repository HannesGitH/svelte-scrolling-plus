import { get } from 'svelte/store'
import { globalOptions } from '../stores'
import type { GlobalOptions } from '../types/options'

const globalOpts = get(globalOptions)

export const getGlobalOptions = (): GlobalOptions => {
  return globalOpts
}

const setGlobalOptions = (options: GlobalOptions): void => {
  globalOptions.update(() => Object.assign(globalOpts, options))
}

export default setGlobalOptions
