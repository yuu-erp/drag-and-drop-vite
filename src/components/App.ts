import { html } from 'lit-html'
import { sharedVariables } from 'src/core/Variables'
import { $ } from 'src/utils/domUtils'

export class DApp {
  variables = sharedVariables
  gridWidth = 0
  padding = 0
  row = 0
  iconWidth = this.variables.get('iconWidth')
  sitePadding = this.variables.get('sitePadding')
  columnNumber = this.variables.get('columnNumber')

  constructor() {
    this.calSize()
  }

  private calSize() {
    console.log('hop li', $('#main'))
    this.gridWidth = (innerWidth - 2 * this.sitePadding) / this.columnNumber
    this.padding = (this.gridWidth - this.iconWidth) / 2
    // console.log('sitePadding', this.sitePadding)
    // console.log('sitePadding 22', this.sitePadding)
  }

  setRow(height: number) {
    this.row = Math.floor(height / this.gridWidth)
  }

  htmlDApp(page: number, x: number, y: number) {
    const left = page * innerWidth + this.sitePadding + x * this.gridWidth + this.padding
    const top = y * this.gridWidth + this.padding

    return html`<div
      id=""
      class="dapp"
      style="top:${top}px; left:${left}px; width:${this.iconWidth}px; height:${this.iconWidth}px"
    ></div>`
  }
}
