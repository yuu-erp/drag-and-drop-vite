import { AppRenderer } from '@core/AppRender'

export function initApp() {
  const rootElement = document.getElementById('main')!
  new AppRenderer(rootElement)
}
