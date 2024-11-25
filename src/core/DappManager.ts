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
    const main = $('#main-grid')!
    const container = mock.map((page, pageIdx) =>
      page.map((item) => this.dapp.htmlDApp(pageIdx, item.position.x, item.position.y))
    )

    render(container, main)
  }

  removeDapp() {}

  updateDapp() {}
}
