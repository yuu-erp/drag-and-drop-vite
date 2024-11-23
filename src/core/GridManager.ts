import { html } from 'lit-html'
import { APP_RAITO, COLUMN } from 'src/constants'

export class GridManager {
  renderHTMLGridMain(data: any) {
    return html` <div id="grid" class="grid">${data.map((item: any, index: number) => html`<div>${index}</div>`)}</div>`
  }

  constructor() {
    // this.init()
  }
}
