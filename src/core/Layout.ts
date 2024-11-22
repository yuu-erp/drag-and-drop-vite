import Root from '@core/Root'
import { html, render as renderLitHTML, TemplateResult } from 'lit-html'

export default abstract class Layout extends Root {
  rootElement: HTMLElement

  constructor(rootElement: HTMLElement, heightStatusBar: number, heightPagination: number, heightDocks: number) {
    super(heightStatusBar, heightPagination, heightDocks)
    this.rootElement = rootElement
  }

  render() {
    renderLitHTML(this.renderApp(), this.rootElement)
  }

  private renderApp() {
    return html`${this.renderHtmlStatusBar()}${this.renderHtmlPagination()}${this.renderHtmlDock()}${this.renderHtmlLoading()}`
  }

  renderHtmlLoading(): TemplateResult<1> {
    return html` <div id="loading" @click="${() => this.setLoading(false)}">Loading...</div> `
  }

  abstract renderHtmlStatusBar(): TemplateResult<1>
  abstract renderHtmlPagination(): TemplateResult<1>
  abstract renderHtmlDock(): TemplateResult<1>
}
