import Root from 'src/core/Root'
import { html, render as renderLitHTML, TemplateResult } from 'lit-html'
import PageManager from './PageManager'

export default abstract class Layout extends Root {
  rootElement: HTMLElement
  pageManager: PageManager
  constructor(rootElement: HTMLElement, heightStatusBar: number, heightPagination: number, heightDocks: number) {
    super(heightStatusBar, heightPagination, heightDocks)
    this.rootElement = rootElement
    this.pageManager = new PageManager(this.pages)
  }

  render() {
    renderLitHTML(this.renderApp(), this.rootElement)
  }

  private renderApp() {
    return html`${this.renderHtmlStatusBar()}${this.renderHtmlDappMain()}${this.renderHtmlPagination()}${this.renderHtmlDock()}${this.renderHtmlLoading()}`
  }

  private renderHtmlLoading(): TemplateResult<1> {
    return html` <div id="loading" @click="${() => this.setLoading(false)}">Loading...</div> `
  }

  abstract renderHtmlStatusBar(): TemplateResult<1>
  abstract renderHtmlDappMain(): TemplateResult<1>
  abstract renderHtmlPagination(): TemplateResult<1>
  abstract renderHtmlDock(): TemplateResult<1>
}
