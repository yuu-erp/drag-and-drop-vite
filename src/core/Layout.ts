import { html, render as renderLitHTML, TemplateResult } from 'lit-html'
import { data } from 'src/constants/mock'
import Root from 'src/core/Root'
import PageManager from './PageManager'
import { GridManager } from './GridManager'
export default abstract class Layout extends Root {
  rootElement: HTMLElement
  pages: Dapp[][]
  currentPage = 0
  pageManager: PageManager

  constructor(rootElement: HTMLElement, heightStatusBar: number, heightPagination: number, heightDocks: number) {
    super(heightStatusBar, heightPagination, heightDocks)
    this.rootElement = rootElement
    this.pages = data
    this.pageManager = new PageManager(data)

    // this.getData()
  }

  render() {
    renderLitHTML(this.renderApp(), this.rootElement)
    console.log('grid 33', this.rootElement)

    this.setLoading(false)
    const grid: HTMLElement = document.querySelector('#grid')!
    if (!grid) return
    console.log('grid', grid)
  }

  private renderApp() {
    return html`${this.renderHtmlStatusBar()}${this.renderHtmlDappMain()}${this.renderHtmlPagination()}${this.renderHtmlDock()}${this.renderHtmlLoading()}`
  }

  private renderHtmlLoading(): TemplateResult<1> {
    return html` <div id="loading" @click="${() => this.setLoading(false)}">Loading...</div> `
  }

  private renderGrid() {
    return html` <div id="grid" class="grid">
      ${this.pages.map((page, pageIdx) => page.map((item, itemIdx) => html`<div>${pageIdx + itemIdx}</div>`))}
    </div>`
  }

  abstract renderHtmlStatusBar(): TemplateResult<1>
  abstract renderHtmlDappMain(): TemplateResult<1>
  abstract renderHtmlPagination(): TemplateResult<1>
  abstract renderHtmlDock(): TemplateResult<1>
}
