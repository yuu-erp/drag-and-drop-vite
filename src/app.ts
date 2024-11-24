import Layout from './layouts'
import { $ } from './utils/domUtils'
export function initApp() {
  const rootElement = $('#root')!
  const layout = new Layout(rootElement)
  layout.render()
  console.log('layoutRoot: ', layout.variables.getAll())
}
