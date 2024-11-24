import { html, TemplateResult } from 'lit-html'
import { sharedVariables } from './Variables'

export default class PageManager {
  private variables = sharedVariables
  private pages: Dapp[][]
  constructor() {
    this.pages = this.variables.get('pages')
  }

  render(): TemplateResult<1> {
    return html`
      <div class="main_grid">${this.pages.map((_page, index) => html`<div class="main_grid-page">${index}</div>`)}</div>
    `
  }
}
