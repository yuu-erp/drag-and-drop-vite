import Root from 'src/core/Root'
import { html, render as renderLitHTML, TemplateResult } from 'lit-html'
import { styleElement } from 'src/utils/domUtils'
import { CoreNative } from './Data'
import { data } from 'src/constants/mock'
export default abstract class Layout extends Root {
  rootElement: HTMLElement
  coreNative: CoreNative
  pages: Dapp[][] = data
  currentPage = 0

  constructor(rootElement: HTMLElement, heightStatusBar: number, heightPagination: number, heightDocks: number) {
    super(heightStatusBar, heightPagination, heightDocks)
    this.rootElement = rootElement
    this.coreNative = new CoreNative()
    // this.getData()
  }

  private async getData() {
    this.pages = await this.coreNative.getAllDapp()
    this.setLoading(false)
  }

  render() {
    console.log('this', this.pages)
    this.setLoading(false)

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
