import smoothScroll from './smoothScroll'
import { getGlobalOptions } from '@api/globalOptions'

const globalOptions = getGlobalOptions()

const scrolling = (
  endPosition: number,
  opts?: GlobalOptions
) => {
  const options = Object.assign(globalOptions, opts)

  const start = window.pageYOffset
  const end = endPosition + options.offset

  smoothScroll({ start, end, ...options }, (position: number) => {
    window.scroll(0, position)
  })
}

export default scrolling