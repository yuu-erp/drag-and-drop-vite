import layouts, { DeviceType } from './layouts'
export function initApp() {
  const deviceType = window.deviceType || 'mobile'
  const rootElement = document.querySelector('#main')! as HTMLElement
  const layout = layouts[deviceType as DeviceType]
  const layoutRoot = new layout(rootElement)
  layoutRoot.render()
  layoutRoot.init()
}
