import { render } from 'lit-html'
import { DApp } from 'src/components/App'
import { mock } from 'src/constants/mock'
import { $ } from 'src/utils/domUtils'

export default class DappManager extends DApp {
  constructor() {
    super()
    this.init()
  }

  init() {}

  renderAllDapp() {
    const mainGrid = $('#main-grid')!
    this.containerHeight = mainGrid.getBoundingClientRect().height

    const container = mock.map((page, pageIdx) =>
      page.map(({ position, ...item }) => this.htmlDApp(pageIdx, [position.x, position.y], item.bundleId))
    )
    render(container, mainGrid)
  }

  removeDapp() {}

  updateDapp() {}
}
