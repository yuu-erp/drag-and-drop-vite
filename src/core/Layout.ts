import { html, render as renderLitHTML, TemplateResult } from 'lit-html'
import Draggable from './Draggable'

export default abstract class Layout extends Draggable {
  rootElement: HTMLElement
  constructor(rootElement: HTMLElement, heightStatusBar: number, heightPagination: number, heightDocks: number) {
    super(rootElement, heightStatusBar, heightPagination, heightDocks)
    this.rootElement = rootElement
  }

  render() {
    renderLitHTML(this.renderApp(), this.rootElement)
  }

  private renderApp() {
    const sections = [
      this.renderHtmlStatusBar(),
      this.renderHtmlDappMain(),
      this.renderHtmlPagination(),
      this.renderHtmlDock(),
      this.renderHtmlLoading()
    ]
    return html`${sections}`
  }

  private renderHtmlLoading(): TemplateResult<1> {
    return html` <div id="loading" @click="${() => this.setLoading(false)}">Loading...</div> `
  }

  abstract renderHtmlStatusBar(): TemplateResult<1>
  abstract renderHtmlDappMain(): TemplateResult<1>
  abstract renderHtmlPagination(): TemplateResult<1>
  abstract renderHtmlDock(): TemplateResult<1>
}
