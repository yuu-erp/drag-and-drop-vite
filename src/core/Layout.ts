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
    return html`${this.renderHtmlStatusBar()}${this.renderHtmlPagination()}${this.renderHtmlDock()}`
  }

  abstract renderHtmlStatusBar(): TemplateResult<1>
  abstract renderHtmlPagination(): TemplateResult<1>
  abstract renderHtmlDock(): TemplateResult<1>
}
