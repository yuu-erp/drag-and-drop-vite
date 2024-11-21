import { html, render } from 'lit-html'
export default abstract class Layout {
  private rootElement: HTMLElement
  windowWidth: number
  windowHeight: number
  heightStatusBar: number
  heightPagination: number
  heightDock: number

  constructor(rootElement: HTMLElement, heightStatusBar: number, heightPagination: number, heightDock: number) {
    this.rootElement = rootElement
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
    this.heightStatusBar = heightStatusBar
    this.heightPagination = heightPagination
    this.heightDock = heightDock
  }

  init() {
    render(this.renderHtmlStatusBar(), this.rootElement)
  }

  private renderApp() {
    return html`${this.renderHtmlStatusBar()}${this.renderHtmlPagination()}`
  }

  renderHtmlStatusBar() {
    return html`<div>renderHtmlStatusBar</div>`
  }
  renderHtmlPagination() {
    return html`<div>renderHtmlPagination</div>`
  }
}
