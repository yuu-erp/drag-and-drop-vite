import FetchData from './core/FetchData'
import layouts from './layouts'
import { $ } from './utils/domUtils'

export function initApp() {
  const deviceType = window.deviceType || 'mobile'
  const rootElement = $('#root')! as HTMLElement
  const layout = layouts[deviceType]
  const layoutRoot = new layout(rootElement)
  layoutRoot.render()
}
