import { render } from 'lit-html'
import { DApp } from 'src/components/App'
import { mock } from 'src/constants/mock'
import { $ } from 'src/utils/domUtils'

export default class DappManager {
  dapp = new DApp()
  constructor() {
    this.init()
  }

  init() {}

  getEle() {
    const main = $('#main')
    const b = main?.getBoundingClientRect()
    console.log('bb', b?.width, b?.left)

    console.log('mm', main?.style.left)

    const mainGrid = $('#main-grid')!
    const container = mock.map((page, pageIdx) =>
      page.map((item) => this.dapp.htmlDApp(pageIdx, item.position.x, item.position.y))
    )

    render(container, mainGrid)
  }

  removeDapp() {}

  updateDapp() {}
}
