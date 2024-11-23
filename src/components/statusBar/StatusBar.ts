import { html, render, TemplateResult } from 'lit-html'
import { $ } from 'src/utils/domUtils'

export default class StatusBar {
  constructor() {}

  html() {
    const elementStatusBar = $('#status-bar')!
    if (!elementStatusBar) throw Error('#status-bar is not defined')
    render(this.returnHtml(), elementStatusBar)
  }

  private returnHtml(): TemplateResult<1> {
    return html`<div>xin chào</div>`
  }
}
