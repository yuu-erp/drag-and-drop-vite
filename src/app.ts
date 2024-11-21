import MobileLayout from './layouts/MobileLayout'

export function initApp() {
  const rootElement = document.querySelector('#main')! as HTMLElement
  new MobileLayout(rootElement).init()
}
